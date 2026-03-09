import session from 'express-session';
import passport from 'passport';
import pgSession from 'connect-pg-simple';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const PgSession = pgSession(session);
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      store: new PgSession({
        conString: process.env['DATABASE_URL'],
        tableName: 'session',
        createTableIfMissing: true,
      }),
      secret: 'super-secret',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    }),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  app.use(passport.initialize());
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  app.use(passport.session());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // app.use((req, res, next) => {
  //   console.log('Session:', req.session);
  //   console.log('User:', req.user);
  //   next();
  // });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
