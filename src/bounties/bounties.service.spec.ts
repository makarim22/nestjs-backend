import { Test, TestingModule } from '@nestjs/testing';
import { BountiesService } from './bounties.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BountiesService', () => {
  let service: BountiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BountiesService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<BountiesService>(BountiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
