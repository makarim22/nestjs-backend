import { PrismaService } from '../prisma/prisma.service';
import { Prisma, BookReview } from '@prisma/client';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.BookReviewUncheckedCreateInput): Promise<BookReview>;
    findAll(): Promise<BookReview[]>;
    findPending(): Promise<BookReview[]>;
    findByUser(authorId: string): Promise<BookReview[]>;
    findOne(id: string): Promise<BookReview | null>;
    update(id: string, data: Prisma.BookReviewUpdateInput): Promise<BookReview>;
    remove(id: string): Promise<BookReview>;
}
