import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SyndicatesService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; description: string; creatorId: string }) {
    const { name, description, creatorId } = data;

    // Check if name taken
    const existing = await this.prisma.syndicate.findUnique({
      where: { name },
    });
    if (existing) throw new BadRequestException('Syndicate name already taken');

    return this.prisma.syndicate.create({
      data: {
        name,
        description,
        creatorId,
        members: {
          create: {
            userId: creatorId,
            role: 'LEADER',
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.syndicate.findMany({
      include: {
        _count: {
          select: { members: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const syndicate = await this.prisma.syndicate.findUnique({
      where: { id },
      include: {
        members: {
          include: {
            user: { select: { id: true, name: true, avatarUrl: true } },
          },
          orderBy: { role: 'asc' }, // LEADER first
        },
        messages: {
          include: {
            author: { select: { id: true, name: true, avatarUrl: true } },
          },
          orderBy: { createdAt: 'desc' },
          take: 50,
        },
        targets: {
          include: { addedBy: { select: { id: true, name: true } } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
    if (!syndicate) throw new NotFoundException('Syndicate not found');

    // Reverse messages to chronological order for chat
    syndicate.messages = syndicate.messages.reverse();
    return syndicate;
  }

  async join(id: string, userId: string) {
    const existing = await this.prisma.syndicateMember.findUnique({
      where: { syndicateId_userId: { syndicateId: id, userId } },
    });
    if (existing) throw new BadRequestException('Already a member');

    return this.prisma.syndicateMember.create({
      data: { syndicateId: id, userId },
    });
  }

  async leave(id: string, userId: string) {
    return this.prisma.syndicateMember.delete({
      where: { syndicateId_userId: { syndicateId: id, userId } },
    });
  }

  async addMessage(id: string, userId: string, content: string) {
    // Verify membership
    const member = await this.prisma.syndicateMember.findUnique({
      where: { syndicateId_userId: { syndicateId: id, userId } },
    });
    if (!member) throw new BadRequestException('Must be a member to post');

    return this.prisma.syndicateMessage.create({
      data: { syndicateId: id, authorId: userId, content },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });
  }

  async addTarget(id: string, userId: string, title: string, type: string) {
    // Verify membership
    const member = await this.prisma.syndicateMember.findUnique({
      where: { syndicateId_userId: { syndicateId: id, userId } },
    });
    if (!member)
      throw new BadRequestException('Must be a member to add targets');

    return this.prisma.syndicateTarget.create({
      data: { syndicateId: id, addedById: userId, title, type },
      include: { addedBy: { select: { id: true, name: true } } },
    });
  }
}
