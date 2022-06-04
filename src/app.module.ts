import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElementsOfRandomnessModule } from './elements-of-randomness/elements-of-randomness.module';
import { ElementsOfRandomnessService } from './elements-of-randomness/elements-of-randomness.service';
import { UtilsModule } from './utils/utils.module';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [ElementsOfRandomnessModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService, ElementsOfRandomnessService, UtilsService],
})
export class AppModule {}
