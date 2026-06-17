import { Module } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { BountiesController } from './bounties.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BountiesService],
  controllers: [BountiesController],
  exports: [BountiesService]
})
export class BountiesModule {}
