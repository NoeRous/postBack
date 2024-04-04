import { Test, TestingModule } from '@nestjs/testing';
import { PostulationPhaseDetailController } from './postulation_phase_detail.controller';

describe('PostulationPhaseDetailController', () => {
  let controller: PostulationPhaseDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationPhaseDetailController],
    }).compile();

    controller = module.get<PostulationPhaseDetailController>(PostulationPhaseDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
