import { PrismaService } from '../prisma/prisma.service';
import { Prisma, MovieReview } from '@prisma/client';
export declare class MoviesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.MovieReviewUncheckedCreateInput): Promise<MovieReview>;
    findAll(): Promise<MovieReview[]>;
    findOne(id: string): Promise<MovieReview | null>;
    update(id: string, data: Prisma.MovieReviewUpdateInput): Promise<MovieReview>;
    remove(id: string): Promise<MovieReview>;
}
