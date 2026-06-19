import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';
import { WebhooksService } from '../webhooks/webhooks.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private webhooksService: WebhooksService,
  ) {}

  async create(data: Prisma.PostUncheckedCreateInput): Promise<Post> {
    if (!data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      // append random string to avoid collision
      data.slug += '-' + Math.random().toString(36).substring(2, 8);
    }
    return this.prisma.post.create({ data });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });
  }

  async findOne(slugOrId: string): Promise<Post | null> {
    let post = await this.prisma.post.findUnique({
      where: { id: slugOrId },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });
    if (!post) {
      post = await this.prisma.post.findUnique({
        where: { slug: slugOrId },
        include: {
          author: { select: { id: true, name: true, avatarUrl: true } },
        },
      });
    }
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
    const existingPost = await this.prisma.post.findUnique({ where: { id } });
    if (
      data.status === 'PUBLISHED' &&
      existingPost &&
      !existingPost.publishedAt
    ) {
      data.publishedAt = new Date();
    }
    const updatedPost = await this.prisma.post.update({
      where: { id },
      data,
    });
    if (updatedPost.status === 'PUBLISHED') {
      await this.webhooksService.dispatchPing(
        updatedPost.id,
        updatedPost.status,
      );
    }
    return updatedPost;
  }

  async remove(id: string): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
