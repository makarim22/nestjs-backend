import { PrismaService } from '../prisma/prisma.service';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        id: string;
        content: string;
        authorName: string | null;
        createdAt: Date;
        movieReviewId: string | null;
        bookReviewId: string | null;
    }>;
    findAllByMovie(movieId: string): Promise<{
        id: string;
        content: string;
        authorName: string | null;
        createdAt: Date;
        movieReviewId: string | null;
        bookReviewId: string | null;
    }[]>;
    findAllByBook(bookId: string): Promise<{
        id: string;
        content: string;
        authorName: string | null;
        createdAt: Date;
        movieReviewId: string | null;
        bookReviewId: string | null;
    }[]>;
}
