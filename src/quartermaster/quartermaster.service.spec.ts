import { Test, TestingModule } from '@nestjs/testing';
import { QuartermasterService } from './quartermaster.service';

describe('QuartermasterService', () => {
  let service: QuartermasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuartermasterService],
    }).compile();

    service = module.get<QuartermasterService>(QuartermasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
