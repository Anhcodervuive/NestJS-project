import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    console.log('sesssion: ', req.session);
    console.log('user: ', req.user);
    return this.appService.getHello();
  }

  @Get('portal')
  portal(): string {
    return '';
  }
}
