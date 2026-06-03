import { PrismaService } from '../prisma/prisma.service';
import { WebhooksService } from '../webhooks/webhooks.service';
export declare class SchedulerService {
    private prisma;
    private webhooksService;
    constructor(prisma: PrismaService, webhooksService: WebhooksService);
    handleCron(): Promise<void>;
}
