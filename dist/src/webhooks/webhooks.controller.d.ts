import { WebhooksService } from './webhooks.service';
import { Prisma } from '@prisma/client';
export declare class WebhooksController {
    private readonly webhooksService;
    constructor(webhooksService: WebhooksService);
    create(createWebhookDto: Prisma.WebhookCreateInput): Promise<{
        url: string;
        id: string;
        name: string;
        createdAt: Date;
        active: boolean;
    }>;
    findAll(): Promise<{
        url: string;
        id: string;
        name: string;
        createdAt: Date;
        active: boolean;
    }[]>;
}
