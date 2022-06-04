import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElementsOfRandomnessService } from './elements-of-randomness/elements-of-randomness.service';
import { UtilsService } from './utils/utils.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ElementsOfRandomnessService, UtilsService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "army 1 has won the battle"', () => {
      expect(appController.battleBetweenArmiesController({army1: 50, army2: 20})).toBe('army 1 has won the battle');
    });
  });
});
