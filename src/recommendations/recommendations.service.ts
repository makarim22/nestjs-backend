import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecommendationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getRecommendations(userId: string | null) {
    let topTags: string[] = [];
    let excludePostIds: string[] = [];
    let excludeMovieIds: string[] = [];
    let excludeBookIds: string[] = [];

    if (userId) {
      // 1. Fetch user's interacted items
      const authoredPosts = await this.prisma.post.findMany({
        where: { authorId: userId },
        include: { tags: true },
      });

      const savedMovies = await this.prisma.savedMovie.findMany({
        where: { userId },
        include: { movieReview: { include: { tags: true } } },
      });

      const savedBooks = await this.prisma.savedBook.findMany({
        where: { userId },
        include: { bookReview: { include: { tags: true } } },
      });

      // Extract items to exclude
      excludePostIds = authoredPosts.map((p) => p.id);
      excludeMovieIds = savedMovies.map((sm) => sm.movieReviewId);
      excludeBookIds = savedBooks.map((sb) => sb.bookReviewId);

      // Extract all tags and count frequencies
      const tagCounts: Record<string, number> = {};

      const addTags = (tags: { name: string }[]) => {
        for (const tag of tags) {
          tagCounts[tag.name] = (tagCounts[tag.name] || 0) + 1;
        }
      };

      authoredPosts.forEach((p) => addTags(p.tags));
      savedMovies.forEach((sm) => addTags(sm.movieReview.tags));
      savedBooks.forEach((sb) => addTags(sb.bookReview.tags));

      // Sort tags by frequency and get top 5
      topTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a)
        .map(([name]) => name)
        .slice(0, 5);
    }

    // 2. Fetch Candidates
    // If we have top tags, we try to fetch items containing those tags.
    // If no top tags (guest or new user), we fetch highest rated / newest.

    const postWhere = {
      status: 'PUBLISHED',
      id: { notIn: excludePostIds },
      ...(topTags.length > 0 && { tags: { some: { name: { in: topTags } } } }),
    };

    const movieWhere = {
      status: 'APPROVED',
      id: { notIn: excludeMovieIds },
      ...(topTags.length > 0 && { tags: { some: { name: { in: topTags } } } }),
    };

    const bookWhere = {
      status: 'APPROVED',
      id: { notIn: excludeBookIds },
      ...(topTags.length > 0 && { tags: { some: { name: { in: topTags } } } }),
    };

    // Fetch up to 10 of each
    let posts = await this.prisma.post.findMany({
      where: postWhere,
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: { tags: true, author: { select: { name: true, avatarUrl: true } } },
    });

    let movies = await this.prisma.movieReview.findMany({
      where: movieWhere,
      orderBy: [{ rating: 'desc' }, { createdAt: 'desc' }],
      take: 10,
      include: { tags: true, author: { select: { name: true, avatarUrl: true } } },
    });

    let books = await this.prisma.bookReview.findMany({
      where: bookWhere,
      orderBy: [{ rating: 'desc' }, { createdAt: 'desc' }],
      take: 10,
      include: { tags: true, userAuthor: { select: { name: true, avatarUrl: true } } },
    });

    // 3. Fallback logic if personalized feed is too small
    const totalItems = posts.length + movies.length + books.length;
    if (topTags.length > 0 && totalItems < 5) {
      // Fetch generic top items to pad the list
      const genericPosts = await this.prisma.post.findMany({
        where: { status: 'PUBLISHED', id: { notIn: [...excludePostIds, ...posts.map(p => p.id)] } },
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: { tags: true, author: { select: { name: true, avatarUrl: true } } },
      });
      posts = [...posts, ...genericPosts];

      const genericMovies = await this.prisma.movieReview.findMany({
        where: { status: 'APPROVED', id: { notIn: [...excludeMovieIds, ...movies.map(m => m.id)] } },
        orderBy: [{ rating: 'desc' }, { createdAt: 'desc' }],
        take: 5,
        include: { tags: true, author: { select: { name: true, avatarUrl: true } } },
      });
      movies = [...movies, ...genericMovies];

      const genericBooks = await this.prisma.bookReview.findMany({
        where: { status: 'APPROVED', id: { notIn: [...excludeBookIds, ...books.map(b => b.id)] } },
        orderBy: [{ rating: 'desc' }, { createdAt: 'desc' }],
        take: 5,
        include: { tags: true, userAuthor: { select: { name: true, avatarUrl: true } } },
      });
      books = [...books, ...genericBooks];
    }

    // 4. Normalize and Score
    const normalizedPosts = posts.map(p => ({ ...p, type: 'post', score: this.calculateScore(p, topTags) }));
    const normalizedMovies = movies.map(m => ({ ...m, type: 'movie', score: this.calculateScore(m, topTags) }));
    
    // bookReview uses 'userAuthor', normalize to 'author' for consistency
    const normalizedBooks = books.map(b => {
      const { userAuthor, ...rest } = b;
      return { ...rest, author: userAuthor, type: 'book', score: this.calculateScore(b, topTags) };
    });

    // 5. Combine and Sort by score
    const feed = [...normalizedPosts, ...normalizedMovies, ...normalizedBooks];
    feed.sort((a, b) => b.score - a.score);

    // Return top 15 items
    return feed.slice(0, 15);
  }

  private calculateScore(item: any, topTags: string[]): number {
    let score = 0;
    
    // Tag match score
    if (item.tags && topTags.length > 0) {
      const matchCount = item.tags.filter((t: any) => topTags.includes(t.name)).length;
      score += matchCount * 10;
    }

    // Rating score (Movies and Books have rating out of 10)
    if (item.rating) {
      score += item.rating * 2; // up to 20 pts
    } else {
      // Posts don't have ratings, give them a baseline to compete fairly
      score += 15; 
    }

    // Recency score (newer items get slight boost)
    const ageInDays = (new Date().getTime() - new Date(item.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays < 7) score += 5; // less than a week
    else if (ageInDays < 30) score += 2; // less than a month

    // Randomize slightly so feed isn't entirely static
    score += Math.random() * 5;

    return score;
  }
}
