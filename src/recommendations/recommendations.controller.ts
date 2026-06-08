import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { OptionalJwtAuthGuard } from '../auth/optional-jwt-auth.guard';

@Controller('recommendations')
export class RecommendationsController {
  constructor(
    private readonly recommendationsService: RecommendationsService,
  ) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Get()
  async getRecommendations(@Request() req: any) {
    const userId = req.user?.userId || null;
    return this.recommendationsService.getRecommendations(userId);
  }
}
