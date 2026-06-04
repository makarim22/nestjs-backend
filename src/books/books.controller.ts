import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: Prisma.BookReviewUncheckedCreateInput, @Request() req: any) {
    data.authorId = req.user.id;
    data.status = (req.user.role === 'ADMIN' || req.user.role === 'EDITOR') ? 'APPROVED' : 'PENDING';
    return this.booksService.create(data);
  }

  @Get('pending')
  @UseGuards(JwtAuthGuard)
  findPending(@Request() req: any) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
      return { message: 'Unauthorized' };
    }
    return this.booksService.findPending();
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  findMine(@Request() req: any) {
    return this.booksService.findByUser(req.user.id);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard)
  updateStatus(@Param('id') id: string, @Body('status') status: string, @Request() req: any) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
      return { message: 'Unauthorized' };
    }
    return this.booksService.update(id, { status });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() data: Prisma.BookReviewUpdateInput) {
    return this.booksService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
