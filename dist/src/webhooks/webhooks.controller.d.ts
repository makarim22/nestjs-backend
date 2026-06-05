import { WebhooksService } from './webhooks.service';
import { Prisma } from '@prisma/client';
export declare class WebhooksController {
    private readonly webhooksService;
    constructor(webhooksService: WebhooksService);
    create(createWebhookDto: Prisma.WebhookCreateInput): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        url: string;
        active: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        url: string;
        active: boolean;
    }[]>;
}
