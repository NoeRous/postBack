import { Test, TestingModule } from '@nestjs/testing';
import { PostulationPhaseStateService } from './postulation_phase_state.service';

describe('PostulationPhaseStateService', () => {
  let service: PostulationPhaseStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationPhaseStateService],
    }).compile();

    service = module.get<PostulationPhaseStateService>(PostulationPhaseStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
