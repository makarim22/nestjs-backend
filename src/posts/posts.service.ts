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
    return this.prisma.post.create({ data });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findOne(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
    const post = await this.prisma.post.update({
      where: { id },
      data,
    });
    if (data.status === 'PUBLISHED') {
      await this.webhooksService.dispatchPing(post.id, post.status);
    }
    return post;
  }

  async remove(id: string): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
