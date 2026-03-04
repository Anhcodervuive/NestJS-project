import { User } from '@prisma/client';
import 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
    login: (user: User, done: (err?: unknown) => void) => void;
    logout: (done: (err?: unknown) => void) => void;
  }
}
