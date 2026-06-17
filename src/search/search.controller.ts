import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  globalSearch(
    @Query('q') query?: string,
    @Query('type') type?: string,
    @Query('minRating') minRating?: string,
    @Query('year') year?: string,
    @Query('tags') tags?: string,
  ) {
    return this.searchService.advancedSearch({
      q: query,
      type,
      minRating: minRating ? parseInt(minRating, 10) : undefined,
      year: year ? parseInt(year, 10) : undefined,
      tags,
    });
  }
}
