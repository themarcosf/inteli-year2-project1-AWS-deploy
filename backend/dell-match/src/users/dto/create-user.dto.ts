import { IsString, IsEmail } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateUserDto {
  
  @ApiProperty()
  @IsString() 
  name: string;

  @ApiProperty()
  @IsEmail() 
  email: string;

  @ApiProperty()
  @IsString()
  jobTitle: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  country: string;
}
