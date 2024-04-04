import { Test, TestingModule } from '@nestjs/testing';
import { PhaseActionController } from './phase_action.controller';

describe('PhaseActionController', () => {
  let controller: PhaseActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseActionController],
    }).compile();

    controller = module.get<PhaseActionController>(PhaseActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
