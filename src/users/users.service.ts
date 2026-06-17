import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOrCreateByGoogleId(profile: {
    googleId: string;
    email: string;
    name: string;
    avatarUrl: string;
  }): Promise<User> {
    let user = await this.prisma.user.findFirst({
      where: {
        OR: [{ googleId: profile.googleId }, { email: profile.email }],
      },
    });

    if (user) {
      if (!user.googleId || !user.avatarUrl) {
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: {
            googleId: profile.googleId,
            avatarUrl: profile.avatarUrl,
            name: user.name || profile.name,
          },
        });
      }
      return user;
    }

    // Generate a random password to satisfy the NOT NULL constraint in existing Turso DBs
    const randomPassword =
      Math.random().toString(36).slice(-10) +
      Math.random().toString(36).slice(-10);

    return this.prisma.user.create({
      data: {
        email: profile.email,
        googleId: profile.googleId,
        name: profile.name,
        avatarUrl: profile.avatarUrl,
        password: randomPassword, // satisfies SQLite NOT NULL constraint
        role: 'USER', // Normal users created via Google are 'USER'
      },
    });
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        savedMovies: {
          include: { movieReview: true },
          orderBy: { createdAt: 'desc' },
        },
        savedBooks: {
          include: { bookReview: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async toggleSavedMovie(userId: string, movieReviewId: string) {
    const existing = await this.prisma.savedMovie.findUnique({
      where: { userId_movieReviewId: { userId, movieReviewId } },
    });
    if (existing) {
      await this.prisma.savedMovie.delete({ where: { id: existing.id } });
      return { status: 'removed' };
    } else {
      await this.prisma.savedMovie.create({
        data: { userId, movieReviewId },
      });
      return { status: 'added' };
    }
  }

  async toggleSavedBook(userId: string, bookReviewId: string) {
    const existing = await this.prisma.savedBook.findUnique({
      where: { userId_bookReviewId: { userId, bookReviewId } },
    });
    if (existing) {
      await this.prisma.savedBook.delete({ where: { id: existing.id } });
      return { status: 'removed' };
    } else {
      await this.prisma.savedBook.create({
        data: { userId, bookReviewId },
      });
      return { status: 'added' };
    }
  }

  async getDossier(userId: string, currentUserId?: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        role: true,
        createdAt: true,
        _count: {
          select: { followers: true, following: true }
        }
      }
    });

    if (!user) return null;

    let isFollowing = false;
    if (currentUserId) {
      const follow = await this.prisma.follows.findUnique({
        where: {
          followerId_followingId: { followerId: currentUserId, followingId: userId }
        }
      });
      isFollowing = !!follow;
    }

    const movieReviews = await this.prisma.movieReview.findMany({
      where: { authorId: userId, status: 'APPROVED' },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    const bookReviews = await this.prisma.bookReview.findMany({
      where: { authorId: userId, status: 'APPROVED' },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    return {
      ...user,
      isFollowing,
      movieReviews,
      bookReviews
    };
  }

  async toggleFollow(followerId: string, followingId: string) {
    if (followerId === followingId) throw new Error("Cannot follow yourself");

    const existing = await this.prisma.follows.findUnique({
      where: { followerId_followingId: { followerId, followingId } }
    });

    if (existing) {
      await this.prisma.follows.delete({
        where: { followerId_followingId: { followerId, followingId } }
      });
      return { status: 'unfollowed' };
    } else {
      await this.prisma.follows.create({
        data: { followerId, followingId }
      });
      return { status: 'followed' };
    }
  }

  async getFeed(userId: string) {
    const following = await this.prisma.follows.findMany({
      where: { followerId: userId },
      select: { followingId: true }
    });
    
    const followingIds = following.map(f => f.followingId);

    if (followingIds.length === 0) return [];

    const movieReviews = await this.prisma.movieReview.findMany({
      where: { authorId: { in: followingIds }, status: 'APPROVED' },
      include: { author: { select: { id: true, name: true, avatarUrl: true } } },
      orderBy: { createdAt: 'desc' },
      take: 20
    });

    const bookReviews = await this.prisma.bookReview.findMany({
      where: { authorId: { in: followingIds }, status: 'APPROVED' },
      include: { userAuthor: { select: { id: true, name: true, avatarUrl: true } } },
      orderBy: { createdAt: 'desc' },
      take: 20
    });

    const combined = [
      ...movieReviews.map(m => ({ ...m, mediaType: 'movie' })),
      ...bookReviews.map(b => ({ ...b, mediaType: 'book' }))
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
     .slice(0, 30);

    return combined;
  }
}
