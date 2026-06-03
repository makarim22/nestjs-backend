import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: Omit<Prisma.PostUncheckedCreateInput, 'authorId'>, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        status: string;
        publishedAt: Date | null;
        authorId: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        status: string;
        publishedAt: Date | null;
        authorId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        status: string;
        publishedAt: Date | null;
        authorId: string;
    } | null>;
    update(id: string, updatePostDto: Prisma.PostUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        status: string;
        publishedAt: Date | null;
        authorId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        status: string;
        publishedAt: Date | null;
        authorId: string;
    }>;
}
