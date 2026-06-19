import { Test, TestingModule } from '@nestjs/testing';
import { SyndicatesService } from './syndicates.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SyndicatesService', () => {
  let service: SyndicatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyndicatesService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<SyndicatesService>(SyndicatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
