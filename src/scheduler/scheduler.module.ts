import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { WebhooksModule } from '../webhooks/webhooks.module';

@Module({
  imports: [WebhooksModule],
  providers: [SchedulerService],
})
export class SchedulerModule {}
