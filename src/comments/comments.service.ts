import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { NotificationsService } from '../notifications/notifications.service';
import { BadgesService } from '../badges/badges.service';

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
    private badgesService: BadgesService,
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

  async findAllByMovie(movieId: string, userId?: string) {
    const comments = await this.prisma.comment.findMany({
      where: { movieReviewId: movieId, parentId: null },
      include: {
        replies: {
          include: { votes: true },
          orderBy: { createdAt: 'asc' },
        },
        votes: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return this.formatComments(comments, userId);
  }

  async findAllByBook(bookId: string, userId?: string) {
    const comments = await this.prisma.comment.findMany({
      where: { bookReviewId: bookId, parentId: null },
      include: {
        replies: {
          include: { votes: true },
          orderBy: { createdAt: 'asc' },
        },
        votes: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return this.formatComments(comments, userId);
  }

  private formatComments(comments: any[], userId?: string) {
    return comments.map((c) => {
      const score = c.votes
        ? c.votes.reduce((acc: number, v: any) => acc + v.value, 0)
        : 0;
      const userVote =
        userId && c.votes
          ? c.votes.find((v: any) => v.userId === userId)?.value || 0
          : 0;

      const replies = c.replies
        ? c.replies.map((r: any) => {
            const rScore = r.votes
              ? r.votes.reduce((acc: number, v: any) => acc + v.value, 0)
              : 0;
            const rUserVote =
              userId && r.votes
                ? r.votes.find((v: any) => v.userId === userId)?.value || 0
                : 0;
            return {
              id: r.id,
              content: r.content,
              authorName: r.authorName,
              createdAt: r.createdAt,
              parentId: r.parentId,
              score: rScore,
              userVote: rUserVote,
            };
          })
        : [];

      return {
        id: c.id,
        content: c.content,
        authorName: c.authorName,
        createdAt: c.createdAt,
        parentId: c.parentId,
        score,
        userVote,
        replies,
      };
    });
  }

  async vote(commentId: string, userId: string, value: number) {
    if (value === 0) {
      await this.prisma.commentVote.deleteMany({
        where: { commentId, userId },
      });
    } else {
      await this.prisma.commentVote.upsert({
        where: {
          userId_commentId: { userId, commentId },
        },
        update: { value },
        create: {
          userId,
          commentId,
          value,
        },
      });
      if (value === 1) {
        await this.badgesService.checkInformantBadge(userId);
      }
    }

    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
      include: { votes: true },
    });

    if (!comment) return { score: 0, userVote: 0 };

    const score = comment.votes.reduce((acc, v) => acc + v.value, 0);
    return { score, userVote: value };
  }
}
