import { Test, TestingModule } from '@nestjs/testing';
import { QuartermasterService } from './quartermaster.service';
import { PrismaService } from '../prisma/prisma.service';

describe('QuartermasterService', () => {
  let service: QuartermasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuartermasterService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<QuartermasterService>(QuartermasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
