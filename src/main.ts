import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });
  
  // Auto-approve all existing PENDING reviews to fix the empty data issue on remote servers
  const prisma = new PrismaClient();
  await prisma.movieReview.updateMany({
    where: { status: 'PENDING' },
    data: { status: 'APPROVED' }
  });
  await prisma.bookReview.updateMany({
    where: { status: 'PENDING' },
    data: { status: 'APPROVED' }
  });
  await prisma.$disconnect();

  const port = parseInt(process.env.PORT as string, 10) || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
// trigger restart
