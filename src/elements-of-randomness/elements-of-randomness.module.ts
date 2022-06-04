import { Module } from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';
import { ElementsOfRandomnessService } from './elements-of-randomness.service';

@Module({
  controllers: [],
  providers: [ElementsOfRandomnessService, UtilsService]
})
export class ElementsOfRandomnessModule {}
