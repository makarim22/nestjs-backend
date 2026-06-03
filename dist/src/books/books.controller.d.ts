import { BooksService } from './books.service';
import { Prisma } from '@prisma/client';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(data: Prisma.BookReviewUncheckedCreateInput, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        author: string;
        rating: number;
        review: string;
        publishYear: number;
        readDate: Date;
        coverUrl: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        author: string;
        rating: number;
        review: string;
        publishYear: number;
        readDate: Date;
        coverUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        author: string;
        rating: number;
        review: string;
        publishYear: number;
        readDate: Date;
        coverUrl: string | null;
    } | null>;
    update(id: string, data: Prisma.BookReviewUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        author: string;
        rating: number;
        review: string;
        publishYear: number;
        readDate: Date;
        coverUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        author: string;
        rating: number;
        review: string;
        publishYear: number;
        readDate: Date;
        coverUrl: string | null;
    }>;
}
