import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from './dto/register.dto';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto.email, dto.password, dto.fullName);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    const user = req.user;

    if (!user) {
      throw new Error('User not found in request');
    }
    await new Promise<void>((resolve, reject) => {
      req.login(user, (err) => {
        if (err instanceof Error) {
          return reject(err);
        }
        if (err) {
          return reject(new Error('Login failed'));
        }
        resolve();
      });
    });
    return { message: 'Logged in', user: req.user };
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    await new Promise<void>((resolve, reject) => {
      req.logout((err) => {
        if (err instanceof Error) {
          return reject(err);
        }
        if (err) {
          return reject(new Error('Login failed'));
        }
        resolve();
      });
    });
    req.session.destroy(() => {});
    return { message: 'Logged out' };
  }
}
