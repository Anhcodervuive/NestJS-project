import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/authorization/decorators/roles.decorator';
// import type { Role as RolesConstant } from 'src/authorization/constants/authorization.constant';
import { RolesGuard } from 'src/authorization/guards/roles.guard';

@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  @Get('dashboard')
  @Roles(['CUSTOMER', 'ADMIN'])
  getDashboard() {
    return 'admin';
  }
}
