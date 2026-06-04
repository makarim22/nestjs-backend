import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async globalSearch(query: string) {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const searchStr = query.trim();

    const [movies, books] = await Promise.all([
      this.prisma.movieReview.findMany({
        where: {
          OR: [
            { title: { contains: searchStr } },
            { director: { contains: searchStr } },
          ],
        },
        take: 5,
        select: { id: true, title: true, director: true, posterUrl: true }
      }),
      this.prisma.bookReview.findMany({
        where: {
          OR: [
            { title: { contains: searchStr } },
            { author: { contains: searchStr } },
          ],
        },
        take: 5,
        select: { id: true, title: true, author: true, coverUrl: true }
      })
    ]);

    const formattedMovies = movies.map(m => ({
      type: 'movies',
      id: m.id,
      title: m.title,
      creator: m.director,
      image: m.posterUrl
    }));

    const formattedBooks = books.map(b => ({
      type: 'books',
      id: b.id,
      title: b.title,
      creator: b.author,
      image: b.coverUrl
    }));

    return [...formattedMovies, ...formattedBooks];
  }
}
