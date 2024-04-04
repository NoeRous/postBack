import { Test, TestingModule } from '@nestjs/testing';
import { PostulationPhaseStateController } from './postulation_phase_state.controller';

describe('PostulationPhaseStateController', () => {
  let controller: PostulationPhaseStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationPhaseStateController],
    }).compile();

    controller = module.get<PostulationPhaseStateController>(PostulationPhaseStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
