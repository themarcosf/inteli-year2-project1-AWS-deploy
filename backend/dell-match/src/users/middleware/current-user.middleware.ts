import { NextFunction } from "express";
import { Injectable, NestMiddleware, Req } from "@nestjs/common";

import * as jwt from "jsonwebtoken";

import { UsersService } from "./../users.service";

import { throwError } from "./../../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(@Req() req: any, res: any, next: NextFunction) {
    try {
      const { id, exp } = jwt.verify(req.session.token, process.env.JWT_SECRET);

      if (Date.now() / 1000 > exp)
        throwError("UnauthorizedException", "Token expired");

      const _user = await this.usersService.findOne(id);
      req.currentUser = _user;
    } catch (error) {
      req.currentUser = null;
    }

    next();
  }
}
