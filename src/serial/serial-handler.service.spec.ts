import { Test, TestingModule } from '@nestjs/testing';
import { SerialHandlerService } from './serial-handler.service';

describe('SerialHandlerService', () => {
  let service: SerialHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerialHandlerService],
    }).compile();

    service = module.get<SerialHandlerService>(SerialHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
