import { Test, TestingModule } from '@nestjs/testing';
import { WiThrottleMessagesController } from './wi-throttle-messages.controller';
import { WiThrottleMessagesService } from './wi-throttle-messages.service';

describe('WiThrottleMessagesController', () => {
  let controller: WiThrottleMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WiThrottleMessagesController],
      providers: [WiThrottleMessagesService],
    }).compile();

    controller = module.get<WiThrottleMessagesController>(
      WiThrottleMessagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
