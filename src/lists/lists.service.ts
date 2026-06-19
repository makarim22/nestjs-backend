import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.curatedList.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async findAllAdmin() {
    return this.prisma.curatedList.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async findOne(id: string) {
    const list = await this.prisma.curatedList.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true } },
        items: {
          orderBy: { order: 'asc' },
          include: {
            movieReview: true,
            bookReview: true,
          },
        },
      },
    });
    if (!list) throw new NotFoundException('List not found');
    return list;
  }

  async create(data: any, authorId: string) {
    const { items, ...listData } = data;

    return this.prisma.curatedList.create({
      data: {
        ...listData,
        authorId,
        items: {
          create: items.map((item: any) => ({
            order: item.order,
            blurb: item.blurb,
            movieReviewId:
              listData.type === 'MOVIE' ? item.reviewId : undefined,
            bookReviewId: listData.type === 'BOOK' ? item.reviewId : undefined,
          })),
        },
      },
    });
  }

  async update(id: string, data: any) {
    const { items, ...listData } = data;

    // Simplest way to update items is to delete and recreate them
    if (items) {
      await this.prisma.curatedListItem.deleteMany({
        where: { listId: id },
      });
    }

    return this.prisma.curatedList.update({
      where: { id },
      data: {
        ...listData,
        ...(items && {
          items: {
            create: items.map((item: any) => ({
              order: item.order,
              blurb: item.blurb,
              movieReviewId:
                listData.type === 'MOVIE' || data.type === 'MOVIE'
                  ? item.reviewId
                  : undefined,
              bookReviewId:
                listData.type === 'BOOK' || data.type === 'BOOK'
                  ? item.reviewId
                  : undefined,
            })),
          },
        }),
      },
    });
  }

  async remove(id: string) {
    return this.prisma.curatedList.delete({
      where: { id },
    });
  }
}
