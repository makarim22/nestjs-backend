import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<{
        savedMovies: ({
            movieReview: {
                status: string;
                id: string;
                title: string;
                director: string;
                releaseYear: number;
                rating: number;
                theGood: string | null;
                theBad: string | null;
                watchDate: Date;
                posterUrl: string | null;
                review: string;
                createdAt: Date;
                updatedAt: Date;
                authorId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            movieReviewId: string;
            userId: string;
        })[];
        savedBooks: ({
            bookReview: {
                status: string;
                id: string;
                title: string;
                rating: number;
                theGood: string | null;
                theBad: string | null;
                review: string;
                createdAt: Date;
                updatedAt: Date;
                authorId: string;
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
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        email: string;
        googleId: string | null;
        avatarUrl: string | null;
        role: string;
    } | null>;
    toggleSavedMovie(req: any, id: string): Promise<{
        status: string;
    }>;
    toggleSavedBook(req: any, id: string): Promise<{
        status: string;
    }>;
}
