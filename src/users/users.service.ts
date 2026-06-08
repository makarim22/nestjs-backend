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
}
