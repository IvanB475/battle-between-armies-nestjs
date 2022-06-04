import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {

    getARandomNumber(inputNumber: number): number {
        const newNumber: number = Math.floor(inputNumber * Math.random());
        return newNumber;
    } 
}
