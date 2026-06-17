import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/optional-jwt-auth.guard';

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
      parentId?: string;
    },
  ) {
    return this.commentsService.create(data);
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('movie/:id')
  findAllByMovie(@Param('id') id: string, @Req() req: any) {
    return this.commentsService.findAllByMovie(id, req.user?.userId);
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('book/:id')
  findAllByBook(@Param('id') id: string, @Req() req: any) {
    return this.commentsService.findAllByBook(id, req.user?.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/vote')
  vote(
    @Param('id') id: string,
    @Body() body: { value: number },
    @Req() req: any,
  ) {
    return this.commentsService.vote(id, req.user.userId, body.value);
  }
}
