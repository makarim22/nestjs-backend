import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(data: {
        content: string;
        authorName?: string;
        movieReviewId?: string;
        bookReviewId?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        movieReviewId: string | null;
        bookReviewId: string | null;
        authorName: string | null;
    }>;
    findAllByMovie(id: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        movieReviewId: string | null;
        bookReviewId: string | null;
        authorName: string | null;
    }[]>;
    findAllByBook(id: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        movieReviewId: string | null;
        bookReviewId: string | null;
        authorName: string | null;
    }[]>;
}
