import {
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
//////////////////////////////////////////////////////////////////////////////////////

export const throwError = function (exception: string, msg: string): void {
  switch (exception) {
    case "BadRequestException":
      throw new BadRequestException(msg);
      break;

    case "NotFoundException":
      throw new NotFoundException(msg);
      break;

    case "UnauthorizedException":
      throw new UnauthorizedException(msg);
      break;

    default:
      throw new Error("Unknown exception");
  }
};
