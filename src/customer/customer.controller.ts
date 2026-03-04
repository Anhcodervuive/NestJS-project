import { Controller, Get, Param } from '@nestjs/common';

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
}
