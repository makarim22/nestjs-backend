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

  async completeBounty(id: string, adminUserId: string) {
    return this.prisma.$transaction(async (tx) => {
      const bounty = await tx.bounty.findUnique({ where: { id } });
      if (!bounty) throw new NotFoundException('Bounty not found');
      if (bounty.status !== 'CLAIMED') throw new BadRequestException('Bounty is not claimed');

      const updatedBounty = await tx.bounty.update({
        where: { id },
        data: {
          status: 'COMPLETED',
          completedById: adminUserId,
          completedAt: new Date(),
        },
      });

      // Award points to the agent who fulfilled the bounty
      if (bounty.claimedById && bounty.rewardPoints > 0) {
        await tx.user.update({
          where: { id: bounty.claimedById },
          data: {
            points: {
              increment: bounty.rewardPoints,
            },
          },
        });
      }

      return updatedBounty;
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
