import { Test, TestingModule } from '@nestjs/testing';
import { BadgesService } from './badges.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BadgesService', () => {
  let service: BadgesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BadgesService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<BadgesService>(BadgesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
