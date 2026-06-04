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
                authorId: string;
                title: string;
                director: string;
                releaseYear: number;
                rating: number;
                status: string;
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
                authorId: string;
                title: string;
                rating: number;
                status: string;
                theGood: string | null;
                theBad: string | null;
                review: string;
                author: string;
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
        id: string;
        email: string;
        googleId: string | null;
        avatarUrl: string | null;
        name: string | null;
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
