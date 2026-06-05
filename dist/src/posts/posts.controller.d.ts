import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: Omit<Prisma.PostUncheckedCreateInput, 'authorId'>, req: any): Promise<{
        status: string;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }>;
    findAll(): Promise<{
        status: string;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        status: string;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    } | null>;
    update(id: string, updatePostDto: Prisma.PostUpdateInput): Promise<{
        status: string;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        status: string;
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: string;
        slug: string;
        content: string;
        publishedAt: Date | null;
    }>;
}
