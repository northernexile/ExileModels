import { Test, TestingModule } from '@nestjs/testing';
import { WiThrottleMessagesService } from './wi-throttle-messages.service';

describe('WiThrottleMessagesService', () => {
  let service: WiThrottleMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WiThrottleMessagesService],
    }).compile();

    service = module.get<WiThrottleMessagesService>(WiThrottleMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
