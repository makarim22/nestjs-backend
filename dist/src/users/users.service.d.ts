import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    findAll(): Promise<User[]>;
    getProfile(userId: string): Promise<{
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
        name: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    toggleSavedMovie(userId: string, movieReviewId: string): Promise<{
        status: string;
    }>;
    toggleSavedBook(userId: string, bookReviewId: string): Promise<{
        status: string;
    }>;
}
