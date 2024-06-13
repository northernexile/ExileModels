import { Test, TestingModule } from '@nestjs/testing';
import { ProductScalesController } from './product-scales.controller';
import { ProductScalesService } from './product-scales.service';

describe('ProductScalesController', () => {
  let controller: ProductScalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductScalesController],
      providers: [ProductScalesService],
    }).compile();

    controller = module.get<ProductScalesController>(ProductScalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
