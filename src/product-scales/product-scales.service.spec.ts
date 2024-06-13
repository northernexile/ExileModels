import { Test, TestingModule } from '@nestjs/testing';
import { ProductScalesService } from './product-scales.service';

describe('ProductScalesService', () => {
  let service: ProductScalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductScalesService],
    }).compile();

    service = module.get<ProductScalesService>(ProductScalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
