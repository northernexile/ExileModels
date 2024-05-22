import { Test, TestingModule } from '@nestjs/testing';
import { WiThrottleService } from './wi-throttle.service';

describe('WiThrottleService', () => {
  let service: WiThrottleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WiThrottleService],
    }).compile();

    service = module.get<WiThrottleService>(WiThrottleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
