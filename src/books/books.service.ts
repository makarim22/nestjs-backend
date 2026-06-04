import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, BookReview } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BookReviewUncheckedCreateInput): Promise<BookReview> {
    return this.prisma.bookReview.create({ data });
  }

  async findAll(): Promise<BookReview[]> {
    return this.prisma.bookReview.findMany({
      where: { status: 'APPROVED' },
      orderBy: { readDate: 'desc' },
      include: { userAuthor: { select: { name: true } } },
    });
  }

  async findPending(): Promise<BookReview[]> {
    return this.prisma.bookReview.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
      include: { userAuthor: { select: { name: true } } },
    });
  }

  async findByUser(authorId: string): Promise<BookReview[]> {
    return this.prisma.bookReview.findMany({
      where: { authorId },
      orderBy: { createdAt: 'desc' },
      include: { userAuthor: { select: { name: true } } },
    });
  }

  async findOne(id: string): Promise<BookReview | null> {
    const book = await this.prisma.bookReview.findUnique({ 
      where: { id },
      include: { userAuthor: { select: { name: true } } }
    });
    if (!book) throw new NotFoundException('Book review not found');
    return book;
  }

  async update(id: string, data: Prisma.BookReviewUpdateInput): Promise<BookReview> {
    return this.prisma.bookReview.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<BookReview> {
    return this.prisma.bookReview.delete({ where: { id } });
  }
}
