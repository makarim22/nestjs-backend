import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(
    @Body()
    data: {
      content: string;
      authorName?: string;
      movieReviewId?: string;
      bookReviewId?: string;
    },
  ) {
    return this.commentsService.create(data);
  }

  @Get('movie/:id')
  findAllByMovie(@Param('id') id: string) {
    return this.commentsService.findAllByMovie(id);
  }

  @Get('book/:id')
  findAllByBook(@Param('id') id: string) {
    return this.commentsService.findAllByBook(id);
  }
}
