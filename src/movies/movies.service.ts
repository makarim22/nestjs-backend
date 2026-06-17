import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, MovieReview } from '@prisma/client';
import { BadgesService } from '../badges/badges.service';

@Injectable()
export class MoviesService {
  constructor(
    private prisma: PrismaService,
    private badgesService: BadgesService
  ) {}

  async create(
    data: Prisma.MovieReviewUncheckedCreateInput,
  ): Promise<MovieReview> {
    const movie = await this.prisma.movieReview.create({ data });
    if (movie.status === 'APPROVED') {
      await this.badgesService.checkReviewBadges(movie.authorId);
      await this.checkAndFulfillBounty(movie);
    }
    return movie;
  }

  private async checkAndFulfillBounty(movie: MovieReview) {
    if (movie.status === 'APPROVED') {
      const activeBounty = await this.prisma.bounty.findFirst({
        where: {
          title: movie.title,
          type: 'MOVIE',
          status: 'CLAIMED',
          claimedById: movie.authorId
        }
      });

      if (activeBounty) {
        await this.prisma.bounty.update({
          where: { id: activeBounty.id },
          data: {
            status: 'COMPLETED',
            completedById: movie.authorId,
            completedAt: new Date(),
            movieReviewId: movie.id
          }
        });
        await this.badgesService.checkBountyHunterBadge(movie.authorId);
      }
    }
  }

  async findAll(): Promise<MovieReview[]> {
    return this.prisma.movieReview.findMany({
      where: { status: 'APPROVED' },
      orderBy: { watchDate: 'desc' },
      include: { author: { select: { id: true, name: true } } },
    });
  }

  async findPending(): Promise<MovieReview[]> {
    return this.prisma.movieReview.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
      include: { author: { select: { id: true, name: true } } },
    });
  }

  async findByUser(authorId: string): Promise<MovieReview[]> {
    return this.prisma.movieReview.findMany({
      where: { authorId },
      orderBy: { createdAt: 'desc' },
      include: { author: { select: { id: true, name: true } } },
    });
  }

  async findOne(id: string): Promise<MovieReview | null> {
    const movie = await this.prisma.movieReview.findUnique({
      where: { id },
      include: { author: { select: { id: true, name: true } } },
    });
    if (!movie) throw new NotFoundException('Movie review not found');
    return movie;
  }

  async update(
    id: string,
    data: Prisma.MovieReviewUpdateInput,
  ): Promise<MovieReview> {
    const movie = await this.prisma.movieReview.update({
      where: { id },
      data,
    });
    if (movie.status === 'APPROVED') {
      await this.badgesService.checkReviewBadges(movie.authorId);
      await this.checkAndFulfillBounty(movie);
    }
    return movie;
  }

  async remove(id: string): Promise<MovieReview> {
    return this.prisma.movieReview.delete({ where: { id } });
  }
}
