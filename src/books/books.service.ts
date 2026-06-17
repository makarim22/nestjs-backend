import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, BookReview } from '@prisma/client';
import { BadgesService } from '../badges/badges.service';

@Injectable()
export class BooksService {
  constructor(
    private prisma: PrismaService,
    private badgesService: BadgesService
  ) {}

  async create(
    data: Prisma.BookReviewUncheckedCreateInput,
  ): Promise<BookReview> {
    const book = await this.prisma.bookReview.create({ data });
    if (book.status === 'APPROVED') {
      await this.badgesService.checkReviewBadges(book.authorId);
    }
    return book;
  }

  async findAll(): Promise<BookReview[]> {
    return this.prisma.bookReview.findMany({
      where: { status: 'APPROVED' },
      orderBy: { readDate: 'desc' },
      include: { userAuthor: { select: { id: true, name: true } } },
    });
  }

  async findPending(): Promise<BookReview[]> {
    return this.prisma.bookReview.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
      include: { userAuthor: { select: { id: true, name: true } } },
    });
  }

  async findByUser(authorId: string): Promise<BookReview[]> {
    return this.prisma.bookReview.findMany({
      where: { authorId },
      orderBy: { createdAt: 'desc' },
      include: { userAuthor: { select: { id: true, name: true } } },
    });
  }

  async findOne(id: string): Promise<BookReview | null> {
    const book = await this.prisma.bookReview.findUnique({
      where: { id },
      include: { userAuthor: { select: { id: true, name: true } } },
    });
    if (!book) throw new NotFoundException('Book review not found');
    return book;
  }

  async update(
    id: string,
    data: Prisma.BookReviewUpdateInput,
  ): Promise<BookReview> {
    const book = await this.prisma.bookReview.update({
      where: { id },
      data,
    });
    if (book.status === 'APPROVED') {
      await this.badgesService.checkReviewBadges(book.authorId);
    }
    return book;
  }

  async remove(id: string): Promise<BookReview> {
    return this.prisma.bookReview.delete({ where: { id } });
  }
}
