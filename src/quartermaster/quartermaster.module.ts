import { Module } from '@nestjs/common';
import { QuartermasterService } from './quartermaster.service';
import { QuartermasterController } from './quartermaster.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [QuartermasterService],
  controllers: [QuartermasterController]
})
export class QuartermasterModule {}
