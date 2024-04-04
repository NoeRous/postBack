import { Test, TestingModule } from '@nestjs/testing';
import { PhaseActionService } from './phase_action.service';

describe('PhaseActionService', () => {
  let service: PhaseActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseActionService],
    }).compile();

    service = module.get<PhaseActionService>(PhaseActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
