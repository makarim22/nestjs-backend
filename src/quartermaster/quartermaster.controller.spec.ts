import { Test, TestingModule } from '@nestjs/testing';
import { QuartermasterController } from './quartermaster.controller';
import { QuartermasterService } from './quartermaster.service';

describe('QuartermasterController', () => {
  let controller: QuartermasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuartermasterController],
      providers: [{ provide: QuartermasterService, useValue: {} }],
    }).compile();

    controller = module.get<QuartermasterController>(QuartermasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
