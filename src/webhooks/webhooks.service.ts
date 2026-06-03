import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Webhook, Prisma } from '@prisma/client';

@Injectable()
export class WebhooksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.WebhookCreateInput): Promise<Webhook> {
    return this.prisma.webhook.create({ data });
  }

  async findAll(): Promise<Webhook[]> {
    return this.prisma.webhook.findMany();
  }

  async dispatchPing(postId: string, status: string) {
    const webhooks = await this.prisma.webhook.findMany({
      where: { active: true },
    });
    for (const webhook of webhooks) {
      try {
        await fetch(webhook.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: 'post_status_changed', postId, status }),
        });
      } catch (error) {
        console.error(`Failed to dispatch to webhook ${webhook.url}`, error);
      }
    }
  }
}

