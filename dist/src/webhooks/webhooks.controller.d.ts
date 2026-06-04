import { WebhooksService } from './webhooks.service';
import { Prisma } from '@prisma/client';
export declare class WebhooksController {
    private readonly webhooksService;
    constructor(webhooksService: WebhooksService);
    create(createWebhookDto: Prisma.WebhookCreateInput): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        url: string;
        active: boolean;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        url: string;
        active: boolean;
    }[]>;
}
