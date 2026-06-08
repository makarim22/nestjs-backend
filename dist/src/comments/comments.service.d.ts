import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class CommentsService {
    private prisma;
    private notifications;
    constructor(prisma: PrismaService, notifications: NotificationsService);
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
