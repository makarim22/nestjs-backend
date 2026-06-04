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
