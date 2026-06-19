import { Test, TestingModule } from '@nestjs/testing';
import { SyndicatesController } from './syndicates.controller';
import { SyndicatesService } from './syndicates.service';

describe('SyndicatesController', () => {
  let controller: SyndicatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyndicatesController],
      providers: [{ provide: SyndicatesService, useValue: {} }],
    }).compile();

    controller = module.get<SyndicatesController>(SyndicatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
