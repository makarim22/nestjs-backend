import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const url = process.env.DATABASE_URL || 'file:./dev.db';
    const authToken = process.env.TURSO_AUTH_TOKEN;

    const adapter = new PrismaLibSql({
      url,
      ...(authToken ? { authToken } : {}),
    });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    // Auto-approve all existing PENDING reviews
    await this.movieReview.updateMany({
      where: { status: 'PENDING' },
      data: { status: 'APPROVED' }
    });
    await this.bookReview.updateMany({
      where: { status: 'PENDING' },
      data: { status: 'APPROVED' }
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
