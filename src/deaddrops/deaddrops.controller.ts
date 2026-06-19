import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { DeaddropsService } from './deaddrops.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('deaddrops')
export class DeaddropsController {
  constructor(private readonly deaddropsService: DeaddropsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body()
    data: { title: string; clue: string; content: string; unlocksAt: string },
    @Request() req: any,
  ) {
    return this.deaddropsService.create({ ...data, authorId: req.user.id });
  }

  @Get()
  findAll() {
    return this.deaddropsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deaddropsService.findOne(id);
  }
}
