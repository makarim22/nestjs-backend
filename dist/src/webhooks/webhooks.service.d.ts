import { PrismaService } from '../prisma/prisma.service';
import { Webhook, Prisma } from '@prisma/client';
export declare class WebhooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.WebhookCreateInput): Promise<Webhook>;
    findAll(): Promise<Webhook[]>;
    dispatchPing(postId: string, status: string): Promise<void>;
}
