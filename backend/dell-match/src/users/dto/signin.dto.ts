import { IsEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class SigninDto {

  @ApiProperty()
  @IsEmail()
  email: string;
}
