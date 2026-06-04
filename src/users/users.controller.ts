import { Controller, Get, Post, Param, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.getProfile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('save/movie/:id')
  toggleSavedMovie(@Request() req, @Param('id') id: string) {
    return this.usersService.toggleSavedMovie(req.user.userId, id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('save/book/:id')
  toggleSavedBook(@Request() req, @Param('id') id: string) {
    return this.usersService.toggleSavedBook(req.user.userId, id);
  }
}
