import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class CustomerIpLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    const ip = req.ip || req.socket.remoteAddress;

    console.log(`[Customer API] IP: ${ip} - ${req.method} ${req.originalUrl}`);
    console.log('User: ', req.user);
    next();
  }
}
