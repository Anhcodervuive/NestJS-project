/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get('/')
  findAll() {
    return 'Customer';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `User ${id}`;
  }

  @Post('api1')
  SolveAPI1(@Body() body) {
    const numbers = body.numbers as number[];

    let currentNumber = numbers[0];
    let currentLength = 1;

    let maxNumber = numbers[0];
    let maxLength = 1;

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] === currentNumber) {
        currentLength++;
      } else {
        currentNumber = numbers[i];
        currentLength = 1;
      }

      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxNumber = currentNumber;
      }
    }

    return { number: maxNumber, length: maxLength };
  }

  @Post('api2')
  SolveAPI2(@Body() body) {
    let number = body.number as number;
    let result = '';
    if (number % 3 === 0) {
      result += 'A';
      number /= 3;
    }
    if (number % 5 === 0) {
      result += 'B';
    }
    return result;
  }
}
