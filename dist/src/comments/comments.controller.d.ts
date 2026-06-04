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
        content: string;
        authorName: string | null;
        createdAt: Date;
        movieReviewId: string | null;
        bookReviewId: string | null;
    }>;
    findAllByMovie(id: string): Promise<{
        id: string;
        content: string;
        authorName: string | null;
        createdAt: Date;
        movieReviewId: string | null;
        bookReviewId: string | null;
    }[]>;
    findAllByBook(id: string): Promise<{
        id: string;
        content: string;
        authorName: string | null;
        createdAt: Date;
        movieReviewId: string | null;
        bookReviewId: string | null;
    }[]>;
}
