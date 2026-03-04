import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();

    return user;
  }

  async register(email: string, password: string, fullName?: string) {
    const hashed = await bcrypt.hash(password, 10);
    return this.usersService.create({
      email,
      password: hashed,
      fullName,
    });
  }
}
