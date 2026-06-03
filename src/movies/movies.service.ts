import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, MovieReview } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MovieReviewUncheckedCreateInput): Promise<MovieReview> {
    return this.prisma.movieReview.create({ data });
  }

  async findAll(): Promise<MovieReview[]> {
    return this.prisma.movieReview.findMany({
      orderBy: { watchDate: 'desc' },
      include: { author: { select: { name: true } } },
    });
  }

  async findOne(id: string): Promise<MovieReview | null> {
    const movie = await this.prisma.movieReview.findUnique({ 
      where: { id },
      include: { author: { select: { name: true } } }
    });
    if (!movie) throw new NotFoundException('Movie review not found');
    return movie;
  }

  async update(id: string, data: Prisma.MovieReviewUpdateInput): Promise<MovieReview> {
    return this.prisma.movieReview.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<MovieReview> {
    return this.prisma.movieReview.delete({ where: { id } });
  }
}
