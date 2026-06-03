import { PrismaService } from '../prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';
import { WebhooksService } from '../webhooks/webhooks.service';
export declare class PostsService {
    private prisma;
    private webhooksService;
    constructor(prisma: PrismaService, webhooksService: WebhooksService);
    create(data: Prisma.PostUncheckedCreateInput): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: string): Promise<Post | null>;
    update(id: string, data: Prisma.PostUpdateInput): Promise<Post>;
    remove(id: string): Promise<Post>;
}
