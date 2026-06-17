import {
  Controller,
  Get,
  Post,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/optional-jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return this.usersService.getProfile(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('save/movie/:id')
  async toggleSavedMovie(@Request() req: any, @Param('id') id: string) {
    try {
      return await this.usersService.toggleSavedMovie(req.user.id, id);
    } catch (err) {
      console.error('ERROR IN toggleSavedMovie:', err);
      throw err;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('save/book/:id')
  async toggleSavedBook(@Request() req: any, @Param('id') id: string) {
    try {
      return await this.usersService.toggleSavedBook(req.user.id, id);
    } catch (err) {
      console.error('ERROR IN toggleSavedBook:', err);
      throw err;
    }
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get(':id/dossier')
  async getDossier(@Request() req: any, @Param('id') id: string) {
    const currentUserId = req.user?.id;
    return this.usersService.getDossier(id, currentUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/follow')
  async toggleFollow(@Request() req: any, @Param('id') id: string) {
    return this.usersService.toggleFollow(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me/feed')
  async getFeed(@Request() req: any) {
    return this.usersService.getFeed(req.user.id);
  }
}
