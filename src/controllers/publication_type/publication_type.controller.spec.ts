import { Test, TestingModule } from '@nestjs/testing';
import { PublicationTypeController } from './publication_type.controller';

describe('PublicationTypeController', () => {
  let controller: PublicationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicationTypeController],
    }).compile();

    controller = module.get<PublicationTypeController>(PublicationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
