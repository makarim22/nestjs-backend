import { Test, TestingModule } from '@nestjs/testing';
import { QuartermasterController } from './quartermaster.controller';

describe('QuartermasterController', () => {
  let controller: QuartermasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuartermasterController],
    }).compile();

    controller = module.get<QuartermasterController>(QuartermasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
