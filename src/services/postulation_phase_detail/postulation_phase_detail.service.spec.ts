import { Test, TestingModule } from '@nestjs/testing';
import { PostulationPhaseDetailService } from './postulation_phase_detail.service';

describe('PostulationPhaseDetailService', () => {
  let service: PostulationPhaseDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationPhaseDetailService],
    }).compile();

    service = module.get<PostulationPhaseDetailService>(PostulationPhaseDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
