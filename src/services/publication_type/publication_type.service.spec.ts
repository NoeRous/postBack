import { Test, TestingModule } from '@nestjs/testing';
import { PublicationTypeService } from './publication_type.service';

describe('PublicationTypeService', () => {
  let service: PublicationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicationTypeService],
    }).compile();

    service = module.get<PublicationTypeService>(PublicationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
