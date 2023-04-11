import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
