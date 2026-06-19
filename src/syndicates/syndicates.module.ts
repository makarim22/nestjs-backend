import { Module } from '@nestjs/common';
import { SyndicatesService } from './syndicates.service';
import { SyndicatesController } from './syndicates.controller';

@Module({
  providers: [SyndicatesService],
  controllers: [SyndicatesController],
})
export class SyndicatesModule {}
