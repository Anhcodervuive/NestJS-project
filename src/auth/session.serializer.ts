import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private usersService: UsersService) {
    super();
  }

  serializeUser(user: User, done: (err: Error | null, id?: number) => void) {
    done(null, user.id); // chỉ lưu userId vào session
  }

  async deserializeUser(
    id: number,
    done: (err: Error | null, user?: User | null) => void,
  ) {
    const user = await this.usersService.findById(id);
    done(null, user);
  }
}
