import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { ListsService } from './lists.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  findAll() {
    return this.listsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin')
  findAllAdmin(@Req() req: any) {
    if (req.user.role !== 'EDITOR' && req.user.role !== 'ADMIN') {
      throw new UnauthorizedException('Only editors can manage lists');
    }
    return this.listsService.findAllAdmin();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: any, @Req() req: any) {
    if (req.user.role !== 'EDITOR' && req.user.role !== 'ADMIN') {
      throw new UnauthorizedException('Only editors can create lists');
    }
    return this.listsService.create(data, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() data: any, @Req() req: any) {
    if (req.user.role !== 'EDITOR' && req.user.role !== 'ADMIN') {
      throw new UnauthorizedException('Only editors can update lists');
    }
    return this.listsService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    if (req.user.role !== 'EDITOR' && req.user.role !== 'ADMIN') {
      throw new UnauthorizedException('Only editors can delete lists');
    }
    return this.listsService.remove(id);
  }
}
