import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { WebhooksService } from '../webhooks/webhooks.service';

@Injectable()
export class SchedulerService {
  constructor(
    private prisma: PrismaService,
    private webhooksService: WebhooksService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async handleCron() {
    const now = new Date();
    const scheduledPosts = await this.prisma.post.findMany({
      where: {
        status: 'SCHEDULED',
        publishedAt: {
          lte: now,
        },
      },
    });

    for (const post of scheduledPosts) {
      await this.prisma.post.update({
        where: { id: post.id },
        data: { status: 'PUBLISHED' },
      });
      await this.webhooksService.dispatchPing(post.id, 'PUBLISHED');
      console.log(`Published scheduled post: ${post.id}`);
    }
  }
}

