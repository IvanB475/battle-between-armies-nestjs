import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from 'src/utils/utils.service';
import { ElementsOfRandomnessService } from './elements-of-randomness.service';

describe('ElementsOfRandomnessService', () => {
  let service: ElementsOfRandomnessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementsOfRandomnessService, UtilsService],
    }).compile();

    service = module.get<ElementsOfRandomnessService>(ElementsOfRandomnessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
