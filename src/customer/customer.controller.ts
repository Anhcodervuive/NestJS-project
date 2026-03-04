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
    const numbers = body.numbers as Array<number>;
    const countOccurrences = new Map<number, number>();

    let i = 0;
    while (i < numbers.length) {
      let value = numbers[i];
      let nextValue = numbers[i + 1];
      const occurrences = countOccurrences.get(value) ?? 1;
      countOccurrences.set(value, occurrences);

      while (value === nextValue) {
        const occurrences = countOccurrences.get(value) ?? 1;
        countOccurrences.set(value, occurrences + 1);
        i++;
        value = numbers[i];
        nextValue = numbers[i + 1];
      }
      i++;
    }

    let maxOccurrences = countOccurrences.values().next().value;
    let maxIndex = countOccurrences.keys().next().value;
    countOccurrences.forEach((value, key) => {
      if (value > maxOccurrences) {
        maxIndex = key;
        maxOccurrences = value;
      }
    });

    console.log({ number: maxIndex, length: maxOccurrences });
    return { number: maxIndex, length: maxOccurrences };
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
