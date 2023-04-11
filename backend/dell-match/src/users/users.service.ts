/**
 * IMPORTANT ODDITY ABOUT SQL QUERIES
 * find*(arg) methods : if arg = null | undefined returns first element in table
 */
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { throwError } from "../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const [_userExists] = await this.findAll(createUserDto.email);
    if (_userExists) throwError("BadRequestException", "User already exists");

    const _user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(_user);
  }

  findAll(email?: string): Promise<User[]> {
    return this.usersRepository.find({
      where: { email },
      relations: ["projects"],
    });
  }

  async findOne(id: number): Promise<User> {
    const _user = await this.usersRepository.findOne({
      where: { id },
      relations: ["projects"],
    });
    if (!_user) throwError("NotFoundException", "User not found");
    return _user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const _user = await this.findOne(id);
    return await this.usersRepository.save(Object.assign(_user, updateUserDto));
  }

  async remove(id: number): Promise<void> {
    const _user = await this.findOne(id);
    await this.usersRepository.remove(_user);
    return;
  }
}
