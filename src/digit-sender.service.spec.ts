import { Test, TestingModule } from '@nestjs/testing';
import { NestEmailPinService } from './nest-email-pin.service';

describe('NestEmailPinService', () => {
  let service: NestEmailPinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestEmailPinService],
    }).compile();

    service = module.get<NestEmailPinService>(NestEmailPinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
