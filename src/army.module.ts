import { Module } from '@nestjs/common';
import {  ArmyController } from './army.controller';
import {  ArmyService } from './army.service';
import { ElementsOfRandomnessModule } from './elements-of-randomness/elements-of-randomness.module';
import { ElementsOfRandomnessService } from './elements-of-randomness/elements-of-randomness.service';
import { UtilsModule } from './utils/utils.module';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [ElementsOfRandomnessModule, UtilsModule],
  controllers: [ArmyController],
  providers: [ArmyService, ElementsOfRandomnessService, UtilsService],
})
export class ArmyModule {}
