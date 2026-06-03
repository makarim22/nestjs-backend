import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { UploadsModule } from './uploads/uploads.module';
import { MoviesModule } from './movies/movies.module';
import { BooksModule } from './books/books.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, PostsModule, WebhooksModule, UploadsModule, MoviesModule, BooksModule, SchedulerModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
