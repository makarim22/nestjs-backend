import { PrismaService } from '../prisma/prisma.service';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        movieReviewId: string | null;
        bookReviewId: string | null;
        authorName: string | null;
    }>;
    findAllByMovie(movieId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        movieReviewId: string | null;
        bookReviewId: string | null;
        authorName: string | null;
    }[]>;
    findAllByBook(bookId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        movieReviewId: string | null;
        bookReviewId: string | null;
        authorName: string | null;
    }[]>;
}
