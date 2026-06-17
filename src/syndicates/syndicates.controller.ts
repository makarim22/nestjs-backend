import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { SyndicatesService } from './syndicates.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('syndicates')
export class SyndicatesController {
  constructor(private readonly syndicatesService: SyndicatesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: { name: string; description: string }, @Request() req) {
    return this.syndicatesService.create({ ...data, creatorId: req.user.id });
  }

  @Get()
  findAll() {
    return this.syndicatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syndicatesService.findOne(id);
  }

  @Post(':id/join')
  @UseGuards(JwtAuthGuard)
  join(@Param('id') id: string, @Request() req) {
    return this.syndicatesService.join(id, req.user.id);
  }

  @Post(':id/leave')
  @UseGuards(JwtAuthGuard)
  leave(@Param('id') id: string, @Request() req) {
    return this.syndicatesService.leave(id, req.user.id);
  }

  @Post(':id/messages')
  @UseGuards(JwtAuthGuard)
  addMessage(@Param('id') id: string, @Body() data: { content: string }, @Request() req) {
    return this.syndicatesService.addMessage(id, req.user.id, data.content);
  }

  @Post(':id/targets')
  @UseGuards(JwtAuthGuard)
  addTarget(@Param('id') id: string, @Body() data: { title: string; type: string }, @Request() req) {
    return this.syndicatesService.addTarget(id, req.user.id, data.title, data.type);
  }
}
