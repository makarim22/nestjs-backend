import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuartermasterService {
  constructor(private prisma: PrismaService) {}

  async getItems(userId: string) {
    const items = await this.prisma.storeItem.findMany({
      orderBy: { cost: 'asc' },
    });

    const userPurchases = await this.prisma.userPurchase.findMany({
      where: { userId },
      select: { itemId: true },
    });

    const purchasedIds = new Set(userPurchases.map((p) => p.itemId));

    return items.map((item) => ({
      ...item,
      purchased: purchasedIds.has(item.id),
    }));
  }

  async getBalance(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { points: true },
    });
    if (!user) throw new NotFoundException('User not found');
    return { points: user.points };
  }

  async purchaseItem(userId: string, itemId: string) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Get user and item
      const user = await tx.user.findUnique({ where: { id: userId } });
      const item = await tx.storeItem.findUnique({ where: { id: itemId } });

      if (!user) throw new NotFoundException('User not found');
      if (!item) throw new NotFoundException('Item not found');

      // 2. Check if already purchased
      const existingPurchase = await tx.userPurchase.findUnique({
        where: {
          userId_itemId: {
            userId,
            itemId,
          },
        },
      });

      if (existingPurchase) {
        throw new BadRequestException('Item already purchased');
      }

      // 3. Check balance
      if (user.points < item.cost) {
        throw new BadRequestException(`Insufficient points. You need ${item.cost} points.`);
      }

      // 4. Deduct points and create purchase
      await tx.user.update({
        where: { id: userId },
        data: { points: { decrement: item.cost } },
      });

      const purchase = await tx.userPurchase.create({
        data: {
          userId,
          itemId,
        },
      });

      return { success: true, pointsRemaining: user.points - item.cost, purchase };
    });
  }

  async equipItem(userId: string, itemId: string) {
    const item = await this.prisma.storeItem.findUnique({ where: { id: itemId } });
    if (!item) throw new NotFoundException('Item not found');

    const purchase = await this.prisma.userPurchase.findUnique({
      where: {
        userId_itemId: { userId, itemId }
      }
    });

    if (!purchase) {
      throw new BadRequestException('You do not own this item. Requisition it first.');
    }

    if (item.type === 'AVATAR') {
      await this.prisma.user.update({
        where: { id: userId },
        data: { avatarUrl: item.assetUrl }
      });
      return { success: true, type: 'AVATAR', assetUrl: item.assetUrl };
    } else if (item.type === 'BADGE') {
      await this.prisma.user.update({
        where: { id: userId },
        data: { equippedBadge: item.assetUrl }
      });
      return { success: true, type: 'BADGE', assetUrl: item.assetUrl };
    }

    throw new BadRequestException('This item type cannot be equipped on the server.');
  }
}
