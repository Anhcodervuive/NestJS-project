import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalService } from './local.service';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule],
  providers: [AuthService, LocalService, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
