import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeaddropsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    title: string;
    clue: string;
    content: string;
    unlocksAt: string;
    authorId: string;
  }) {
    return this.prisma.deadDrop.create({
      data: {
        title: data.title,
        clue: data.clue,
        content: data.content,
        unlocksAt: new Date(data.unlocksAt),
        authorId: data.authorId,
      },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });
  }

  async findAll() {
    const drops = await this.prisma.deadDrop.findMany({
      orderBy: { unlocksAt: 'asc' },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });

    const now = new Date();
    return drops.map((drop) => ({
      ...drop,
      isLocked: now < drop.unlocksAt,
      // REDACT content if the drop hasn't unlocked yet
      content: now < drop.unlocksAt ? '[REDACTED]' : drop.content,
    }));
  }

  async findOne(id: string) {
    const drop = await this.prisma.deadDrop.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });

    if (!drop) throw new NotFoundException('Dead Drop not found');

    const now = new Date();
    return {
      ...drop,
      isLocked: now < drop.unlocksAt,
      content: now < drop.unlocksAt ? '[REDACTED]' : drop.content,
    };
  }
}
