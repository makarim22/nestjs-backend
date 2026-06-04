import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.comment.create({ data });
  }

  async findAllByMovie(movieId: string) {
    return this.prisma.comment.findMany({
      where: { movieReviewId: movieId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findAllByBook(bookId: string) {
    return this.prisma.comment.findMany({
      where: { bookReviewId: bookId },
      orderBy: { createdAt: 'desc' }
    });
  }
}
