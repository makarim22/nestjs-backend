import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() data: Prisma.MovieReviewUncheckedCreateInput,
    @Request() req: any,
  ) {
    data.authorId = req.user.id;
    // Admins/Editors auto-approve, normal users are pending
    data.status =
      req.user.role === 'ADMIN' || req.user.role === 'EDITOR'
        ? 'APPROVED'
        : 'PENDING';
    return this.moviesService.create(data);
  }

  @Get('pending')
  @UseGuards(JwtAuthGuard)
  findPending(@Request() req: any) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
      return { message: 'Unauthorized' }; // Ideally use ForbiddenException
    }
    return this.moviesService.findPending();
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  findMine(@Request() req: any) {
    return this.moviesService.findByUser(req.user.id);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard)
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: string,
    @Request() req: any,
  ) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
      return { message: 'Unauthorized' };
    }
    return this.moviesService.update(id, { status });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() data: Prisma.MovieReviewUpdateInput) {
    return this.moviesService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
