import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BountiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.bounty.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        claimedBy: { select: { id: true, name: true, avatarUrl: true } },
        completedBy: { select: { id: true, name: true, avatarUrl: true } },
      }
    });
  }

  async create(data: { title: string, type: string, description: string, rewardPoints?: number }) {
    return this.prisma.bounty.create({
      data: {
        title: data.title,
        type: data.type,
        description: data.description,
        rewardPoints: data.rewardPoints || 50
      }
    });
  }

  async claim(id: string, userId: string) {
    const bounty = await this.prisma.bounty.findUnique({ where: { id } });
    if (!bounty) throw new NotFoundException('Bounty not found');
    if (bounty.status !== 'OPEN') throw new BadRequestException('Bounty is not open');

    return this.prisma.bounty.update({
      where: { id },
      data: {
        status: 'CLAIMED',
        claimedById: userId,
        claimedAt: new Date()
      }
    });
  }

  async unclaim(id: string) {
    const bounty = await this.prisma.bounty.findUnique({ where: { id } });
    if (!bounty) throw new NotFoundException('Bounty not found');
    
    return this.prisma.bounty.update({
      where: { id },
      data: {
        status: 'OPEN',
        claimedById: null,
        claimedAt: null
      }
    });
  }
}
