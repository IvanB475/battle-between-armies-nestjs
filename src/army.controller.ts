import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ArmyService } from './army.service';
import { ArmiesDto } from './dtos/armiesDto';

@Controller()
export class ArmyController {
  constructor(private readonly armyService: ArmyService) {}


  // validation of query parameters should be done using a lib like joi, or with additional edge case coverage ( following example won't, but should fail: '?army1=50&army2')
  @Get()
  battleBetweenArmiesController(@Query() armies: ArmiesDto) : string {
    if(!Number.isInteger(+armies.army1) || !Number.isInteger(+armies.army2)) {
      const ERR_MESSAGE = 'both army1 and army2 are required and have to be integers';
      const ERR_STATUS_CODE = 400;
      throw new HttpException(ERR_MESSAGE, ERR_STATUS_CODE)
    }
    return this.armyService.battleBetweenArmiesService(armies.army1, armies.army2);
  }
}
