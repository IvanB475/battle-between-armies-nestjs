import { Injectable } from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class ElementsOfRandomnessService {
    constructor (
        private utilsService: UtilsService
    ) {}

    reinforcement(army1: number, army2: number) {
        const army1NewCount: number = army1 + this.utilsService.getARandomNumber(army1);
        const army2NewCount: number = army2 + this.utilsService.getARandomNumber(army2);

        return { army1CountAfterReinforcement: army1NewCount, army2CountAfterReinforcement: army2NewCount}
    }

    starvation(army1: number, army2: number) {
        const army1NewCount: number = army1 - this.utilsService.getARandomNumber(army1);
        const army2NewCount: number = army2 - this.utilsService.getARandomNumber(army2);

        return { army1CountAfterStarvation: army1NewCount, army2CountAfterStarvation: army2NewCount}
    }


}
