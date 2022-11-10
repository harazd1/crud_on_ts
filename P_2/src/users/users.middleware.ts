import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const config = require('../config');

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  private readonly config = config;

  use(req: Request, res: Response, next: () => void) {
    if (req.headers.authorization !== this.config.authToken) {
      return res.status(401).json({ success: false, message: 'INVALID_TOKEN' });
    }

    next();
  }
}
