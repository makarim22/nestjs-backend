import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BadgesService {
  private readonly logger = new Logger(BadgesService.name);

  constructor(private prisma: PrismaService) {}

  private async awardBadge(userId: string, criteria: string) {
    try {
      const badge = await this.prisma.badge.findFirst({ where: { criteria } });
      if (!badge) return;

      const existing = await this.prisma.userBadge.findUnique({
        where: { userId_badgeId: { userId, badgeId: badge.id } }
      });

      if (!existing) {
        await this.prisma.userBadge.create({
          data: { userId, badgeId: badge.id }
        });
        this.logger.log(`Awarded badge ${badge.name} to user ${userId}`);
      }
    } catch (error: any) {
      this.logger.error(`Failed to award badge ${criteria} to user ${userId}: ${error.message}`);
    }
  }

  async checkReviewBadges(userId: string) {
    const movieReviews = await this.prisma.movieReview.count({ where: { authorId: userId, status: 'APPROVED' } });
    const bookReviews = await this.prisma.bookReview.count({ where: { authorId: userId, status: 'APPROVED' } });

    if (movieReviews + bookReviews >= 1) {
      await this.awardBadge(userId, 'FIRST_REVIEW');
    }
  }

  async checkNetworkerBadge(userId: string) {
    const following = await this.prisma.follows.count({ where: { followerId: userId } });
    if (following >= 5) {
      await this.awardBadge(userId, 'NETWORKER');
    }
  }

  async checkInformantBadge(userId: string) {
    const upvotesCast = await this.prisma.commentVote.count({ where: { userId, value: 1 } });

    if (upvotesCast >= 5) {
      await this.awardBadge(userId, 'INFORMANT');
    }
  }

  async checkBountyHunterBadge(userId: string) {
    const completedBounties = await this.prisma.bounty.count({ where: { completedById: userId } });
    if (completedBounties >= 1) {
      await this.awardBadge(userId, 'BOUNTY_HUNTER');
    }
  }
}
