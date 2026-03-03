import session from 'express-session';
import passport from 'passport';
import pgSession from 'connect-pg-simple';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const PgSession = pgSession(session);
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      store: new PgSession({
        conString: 'postgres://postgres:password@localhost:5432/mydb',
        tableName: 'session',
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
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
