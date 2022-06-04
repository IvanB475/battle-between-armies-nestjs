import { Test, TestingModule } from '@nestjs/testing';
import { ArmyController } from './army.controller';
import { ArmyService } from './army.service';
import { ElementsOfRandomnessService } from './elements-of-randomness/elements-of-randomness.service';
import { UtilsService } from './utils/utils.service';

describe('AppController', () => {
  let armyController: ArmyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArmyController],
      providers: [ArmyService, ElementsOfRandomnessService, UtilsService],
    }).compile();

    armyController = app.get<ArmyController>(ArmyController);
  });

  describe('root', () => {
    it('should return "army 1 has won the battle"', () => {
      expect(armyController.battleBetweenArmiesController({army1: 50, army2: 20})).toBe('army 1 has won the battle');
    });
  });
});
