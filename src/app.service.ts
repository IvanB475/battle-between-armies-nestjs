import { Injectable } from '@nestjs/common';
import { ElementsOfRandomnessService } from './elements-of-randomness/elements-of-randomness.service';

@Injectable()
export class AppService {
  constructor(
    private elementsOfRandomness: ElementsOfRandomnessService
  ) {}
  battleBetweenArmiesService(army1: number, army2: number): string {
    const {army1CountAfterReinforcement, army2CountAfterReinforcement } = this.elementsOfRandomness.reinforcement(army1, army2);
    const {army1CountAfterStarvation, army2CountAfterStarvation } = this.elementsOfRandomness.starvation(army1CountAfterReinforcement, army2CountAfterReinforcement);
    const BATTLE_RESULT = army1CountAfterStarvation > army2CountAfterStarvation ? 'army 1 has won the battle' : 'army 2 has won the battle';
    return BATTLE_RESULT;
  }
}
