import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: Omit<Prisma.PostUncheckedCreateInput, 'authorId'>, req: any): Promise<{
        id: string;
        title: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    } | null>;
    update(id: string, updatePostDto: Prisma.PostUpdateInput): Promise<{
        id: string;
        title: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }>;
}
