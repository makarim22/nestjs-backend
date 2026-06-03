import { MoviesService } from './movies.service';
import { Prisma } from '@prisma/client';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(data: Prisma.MovieReviewUncheckedCreateInput, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        director: string;
        releaseYear: number;
        rating: number;
        watchDate: Date;
        posterUrl: string | null;
        review: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        director: string;
        releaseYear: number;
        rating: number;
        watchDate: Date;
        posterUrl: string | null;
        review: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        director: string;
        releaseYear: number;
        rating: number;
        watchDate: Date;
        posterUrl: string | null;
        review: string;
    } | null>;
    update(id: string, data: Prisma.MovieReviewUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        director: string;
        releaseYear: number;
        rating: number;
        watchDate: Date;
        posterUrl: string | null;
        review: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        authorId: string;
        director: string;
        releaseYear: number;
        rating: number;
        watchDate: Date;
        posterUrl: string | null;
        review: string;
    }>;
}
