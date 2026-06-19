import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('bounties')
export class BountiesController {
  constructor(private readonly bountiesService: BountiesService) {}

  @Get()
  findAll() {
    return this.bountiesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Req() req: any) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
      throw new UnauthorizedException(
        'Only admins or editors can create bounties',
      );
    }
    return this.bountiesService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/claim')
  claim(@Param('id') id: string, @Req() req: any) {
    return this.bountiesService.claim(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/unclaim')
  unclaim(@Param('id') id: string, @Req() req: any) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
      throw new UnauthorizedException(
        'Only admins or editors can unclaim bounties',
      );
    }
    return this.bountiesService.unclaim(id);
  }
}
