/**
 * IMPORTANT CAVEAT ABOUT TESTING CONTROLLERS
 *
 * controllers should not have complex logic so tests should be really simple
 * all programming and business logic should be implemented elsewhere
 */
import { Test, TestingModule } from "@nestjs/testing";

import { User } from "./entities/user.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CreateUserDto } from "./dto/create-user.dto";
//////////////////////////////////////////////////////////////////////////////////////

describe("UsersController", () => {
  /** dependency instances */
  let controller: UsersController;
  let _usersService: Partial<UsersService>;
  let _authService: Partial<AuthService>;

  /** mock variables */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** mock dependency instances and module */
  beforeEach(async () => {
    let _users: User[] = [];

    _usersService = {
      create: (_user: CreateUserDto) => {
        const user = Object.assign({ id: 1 }, _user) as User;
        _users.push(user);
        return Promise.resolve(user);
      },

      findAll: (email?: string) => {
        return email
          ? Promise.resolve(_users.filter((user) => user.email === email))
          : Promise.resolve(_users);
      },

      findOne: (id: number) => {
        return Promise.resolve(_users.find((user) => user.id === id));
      },

      update: (id: number, _user: Partial<User>) => {
        const index = _users.findIndex((user) => user.id === id);
        _users[index] = Object.assign(_users[index], _user);
        return Promise.resolve(_users[index]);
      },

      remove: (id: number) => {
        _users = _users.filter((user) => user.id !== id);
        return Promise.resolve();
      },
    };

    _authService = {
      signup: (req: any, _user: CreateUserDto) => {
        const user = Object.assign({ id: 1 }, _user) as User;
        _users.push(user);
        return Promise.resolve(user);
      },

      signin: (req: any, _user: CreateUserDto) => {
        const user = Object.assign({ id: 1 }, _user) as User;
        _users.push(user);
        return Promise.resolve(user);
      },

      signout: (req: any) => {
        return Promise.resolve();
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: _usersService },
        { provide: AuthService, useValue: _authService },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  /** test suite */
  it("can create an instance of UsersController", () =>
    expect(controller).toBeDefined());

  describe("Authentication resources", () => {
    it("should signup new user @POST /users/signup", async () =>
      expect(await controller.signup(null, _mockUser)).toEqual({
        id: 1,
        ..._mockUser,
      }));

    it("should signin user @POST /users/signin", async () =>
      expect(await controller.signin(null, _mockUser)).toEqual({
        id: 1,
        ..._mockUser,
      }));

    it("should signout user @POST /users/signout", async () =>
      expect(await controller.signout(null)).toBeUndefined());
  });

  describe("User resources", () => {
    it("should create new user @POST /users", async () =>
      expect(await controller.create(_mockUser)).toEqual({
        id: 1,
        ..._mockUser,
      }));

    it("should return all users @GET /users", async () => {
      await controller.create(_mockUser);
      const _users = await controller.findAll();
      expect(_users).toEqual([{ id: 1, ..._mockUser }]);
    });

    it("should return all users by email @GET /users?email=john.doe@example.com", async () => {
      await controller.create(_mockUser);
      const _user = await controller.findAll("john.doe@example.com");
      expect(_user).toEqual([{ id: 1, ..._mockUser }]);
    });

    it("should return a user by id @GET /users/:id", async () => {
      await controller.create(_mockUser);
      const _user = await controller.findOne("1");
      expect(_user).toEqual({ id: 1, ..._mockUser });
    });

    it("should update a user by id @PATCH /users/:id", async () => {
      await controller.create(_mockUser);
      const _user = await controller.update("1", {
        name: "Jane Doe",
      });
      expect(_user).toEqual({ id: 1, ..._mockUser, name: "Jane Doe" });
    });

    it("should delete a user by id @DELETE /users/:id", async () => {
      await controller.create(_mockUser);
      await controller.remove("1");
      const _users = await controller.findAll();
      expect(_users).toEqual([]);
    });
  });
});
