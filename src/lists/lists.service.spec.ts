import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ListsService', () => {
  let service: ListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListsService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<ListsService>(ListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
