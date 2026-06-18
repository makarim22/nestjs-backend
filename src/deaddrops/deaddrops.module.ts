import { Module } from '@nestjs/common';
import { DeaddropsService } from './deaddrops.service';
import { DeaddropsController } from './deaddrops.controller';

@Module({
  providers: [DeaddropsService],
  controllers: [DeaddropsController],
})
export class DeaddropsModule {}
