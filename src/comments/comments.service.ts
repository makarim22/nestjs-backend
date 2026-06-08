import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
  ) {}

  async create(data: any) {
    const comment = await this.prisma.comment.create({ data });

    // Check if it's for a movie or a book to notify the correct author
    if (data.movieReviewId) {
      const review = await this.prisma.movieReview.findUnique({
        where: { id: data.movieReviewId },
      });
      if (review) {
        await this.notifications.createNotification({
          userId: review.authorId,
          type: 'COMMENT',
          message: `${data.authorName || 'Someone'} commented on your review of ${review.title}`,
          link: `/review/movies/${review.id}`,
        });
      }
    } else if (data.bookReviewId) {
      const review = await this.prisma.bookReview.findUnique({
        where: { id: data.bookReviewId },
      });
      if (review) {
        await this.notifications.createNotification({
          userId: review.authorId,
          type: 'COMMENT',
          message: `${data.authorName || 'Someone'} commented on your review of ${review.title}`,
          link: `/review/books/${review.id}`,
        });
      }
    }

    return comment;
  }

  async findAllByMovie(movieId: string) {
    return this.prisma.comment.findMany({
      where: { movieReviewId: movieId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAllByBook(bookId: string) {
    return this.prisma.comment.findMany({
      where: { bookReviewId: bookId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
