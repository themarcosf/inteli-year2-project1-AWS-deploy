import { rmSync } from "fs";
import * as path from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { Project } from "../projects/entities/project.entity";
//////////////////////////////////////////////////////////////////////////////////////

describe("UsersService", () => {
  /** dependency instances */
  let service: UsersService;

  /** mock variables and objects */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** mock dependency instances and module */
  beforeAll(() =>
    rmSync(path.join(__dirname, "../../db/test.sqlite"), {
      recursive: true,
      force: true,
    })
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: path.join(__dirname, "../../db/test.sqlite"),
          entities: [User, Project],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User, Project]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  /** test suite */
  it("can create an instance of UsersService", () => {
    expect(service).toBeDefined();
  });

  it("should create a new user", async () => {
    const _user = await service.create(_mockUser);
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id");
    expect(_user).toHaveProperty("name", _mockUser.name);
    expect(_user).toHaveProperty("email", _mockUser.email);
    expect(_user).toHaveProperty("jobTitle", _mockUser.jobTitle);
    expect(_user).toHaveProperty("city", _mockUser.city);
    expect(_user).toHaveProperty("country", _mockUser.country);
  });

  it("should throw a BadRequestException if the user already exists", async () => {
    await expect(service.create(_mockUser)).rejects.toThrow(
      new BadRequestException("User already exists")
    );
  });

  it("should throw a NotFoundException if the user does not exist", async () => {
    await expect(service.findOne(0)).rejects.toThrow(
      new NotFoundException("User not found")
    );
  });

  it("should return an array of users", async () => {
    const _users = await service.findAll();
    expect(_users).toBeDefined();
    expect(_users).toHaveLength(1);
  });

  it("should return an user by email", async () => {
    const _user = await service.findAll(_mockUser.email);
    expect(_user).toBeDefined();
    expect(_user).toHaveLength(1);
  });

  it("should return an user by id", async () => {
    const _user = await service.findOne(1);
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id", 1);
  });

  it("should update a user", async () => {
    const _user = await service.update(1, {
      name: "Jane Doe",
      email: "jane.doe@dell.com",
    });
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id", 1);
    expect(_user).toHaveProperty("name", "Jane Doe");
    expect(_user).toHaveProperty("email", "jane.doe@dell.com");
    expect(_user).toHaveProperty("jobTitle", _mockUser.jobTitle);
    expect(_user).toHaveProperty("city", _mockUser.city);
    expect(_user).toHaveProperty("country", _mockUser.country);
  });

  it("should throw a BadRequestException if the user does not exist", async () => {
    await expect(service.update(0, _mockUser)).rejects.toThrow(
      new BadRequestException("User not found")
    );
  });

  it("should delete a user", async () => {
    await expect(service.remove(1)).resolves.toBeUndefined();
  });

  it("should throw a BadRequestException if the user does not exist", async () => {
    await expect(service.remove(0)).rejects.toThrow(
      new BadRequestException("User not found")
    );
  });

  it("should return an empty array of users", async () => {
    const _users = await service.findAll();
    expect(_users).toBeDefined();
    expect(_users).toHaveLength(0);
  });
});
