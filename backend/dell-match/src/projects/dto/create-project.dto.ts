import {
  IsIn,
  Length,
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
} from "class-validator";
import { Transform } from "class-transformer";

import { ApiProperty } from '@nestjs/swagger';

//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateProjectDto {

  @ApiProperty()
  @IsString()
  @Length(3, 50, {
    message: "Name must be between 3 and 50 characters",
  })
  name: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(["it", "commercial", "marketing", "hr", "finance", "legal", "other"], {
    message:
      "Area must be one of: IT, Commercial, Marketing, HR, Finance, Legal, Other",
  })
  area: string;

  @ApiProperty()
  @IsString()
  @Length(3, 500, {
    message: "Description must be between 3 and 500 characters",
  })
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  teamSize: number;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  teamMembers: string[];

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(["open", "in progress", "cancelled"], {
    message: "Status must be one of: Open, In progress, Cancelled",
  })
  status: string;

  // TODO : add validation for dates (applicationDeadline, startDate, endDate)

  @ApiProperty()
  @IsDateString()
  applicationDeadline: Date;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  endDate: Date;
}
