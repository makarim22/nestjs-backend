import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface SearchParams {
  q?: string;
  type?: string;
  minRating?: number;
  year?: number;
  tags?: string;
}

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async advancedSearch(params: SearchParams) {
    const { q, type, minRating, year, tags } = params;

    const searchStr = q ? q.trim() : undefined;
    const isMovies = !type || type === 'all' || type === 'movie';
    const isBooks = !type || type === 'all' || type === 'book';

    const movieWhere: any = { status: 'APPROVED' };
    const bookWhere: any = { status: 'APPROVED' };

    if (searchStr) {
      movieWhere.OR = [
        { title: { contains: searchStr } },
        { director: { contains: searchStr } },
        { review: { contains: searchStr } },
      ];
      bookWhere.OR = [
        { title: { contains: searchStr } },
        { author: { contains: searchStr } },
        { review: { contains: searchStr } },
      ];
    }

    if (minRating !== undefined && !isNaN(minRating)) {
      movieWhere.rating = { gte: minRating };
      bookWhere.rating = { gte: minRating };
    }

    if (year !== undefined && !isNaN(year)) {
      movieWhere.releaseYear = year;
      bookWhere.publishYear = year;
    }

    if (tags && tags.trim().length > 0) {
      const tagList = tags.split(',').map((t) => t.trim());
      movieWhere.tags = { some: { name: { in: tagList } } };
      bookWhere.tags = { some: { name: { in: tagList } } };
    }

    const [movies, books] = await Promise.all([
      isMovies
        ? this.prisma.movieReview.findMany({
            where: movieWhere,
            take: 20,
            select: {
              id: true,
              title: true,
              director: true,
              posterUrl: true,
              rating: true,
              releaseYear: true,
              createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
          })
        : Promise.resolve([]),
      isBooks
        ? this.prisma.bookReview.findMany({
            where: bookWhere,
            take: 20,
            select: {
              id: true,
              title: true,
              author: true,
              coverUrl: true,
              rating: true,
              publishYear: true,
              createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
          })
        : Promise.resolve([]),
    ]);

    const formattedMovies = movies.map((m) => ({
      type: 'movie',
      id: m.id,
      title: m.title,
      creator: m.director,
      year: m.releaseYear,
      rating: m.rating,
      imageUrl: m.posterUrl,
      url: `/movies/${m.id}`,
      createdAt: m.createdAt,
    }));

    const formattedBooks = books.map((b) => ({
      type: 'book',
      id: b.id,
      title: b.title,
      creator: b.author,
      year: b.publishYear,
      rating: b.rating,
      imageUrl: b.coverUrl,
      url: `/books/${b.id}`,
      createdAt: b.createdAt,
    }));

    // Combine and sort by createdAt descending
    const combined = [...formattedMovies, ...formattedBooks].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );

    return combined;
  }
}
