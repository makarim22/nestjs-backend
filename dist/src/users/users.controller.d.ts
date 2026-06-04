import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<{
        savedMovies: ({
            movieReview: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                authorId: string;
                director: string;
                releaseYear: number;
                rating: number;
                theGood: string | null;
                theBad: string | null;
                watchDate: Date;
                posterUrl: string | null;
                review: string;
            };
        } & {
            id: string;
            createdAt: Date;
            movieReviewId: string;
            userId: string;
        })[];
        savedBooks: ({
            bookReview: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                authorId: string;
                author: string;
                rating: number;
                theGood: string | null;
                theBad: string | null;
                review: string;
                publishYear: number;
                readDate: Date;
                coverUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            userId: string;
            bookReviewId: string;
        })[];
        name: string | null;
        id: string;
        email: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    toggleSavedMovie(req: any, id: string): Promise<{
        status: string;
    }>;
    toggleSavedBook(req: any, id: string): Promise<{
        status: string;
    }>;
}
