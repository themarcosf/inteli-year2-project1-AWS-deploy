/**
 * IMPORTANT CAVEAT ABOUT TESTING CONTROLLERS
 *
 * controllers should not have complex logic so tests should be really simple
 * all programming and business logic should be implemented elsewhere
 */
import { Test, TestingModule } from "@nestjs/testing";

import { AuthService } from "./auth.service";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
//////////////////////////////////////////////////////////////////////////////////////

describe("AuthService", () => {
  /** dependency instances */
  let service: AuthService;
  let _usersService: Partial<UsersService>;

  /** mock variables */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  let _users: User[] = [];

  /** mock dependency instances and module */
  beforeAll(async () => {
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
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: _usersService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  /** test suite */
  it("can create an instance of AuthService", () => {
    expect(service).toBeDefined();
  });

  it("should sign up a user", async () => {
    const user = await service.signup({ session: { token: null } }, _mockUser);
    expect(user).toBeDefined();
    expect(user.id).toEqual(1);
  });

  it("should send welcome email to new customer [TODO]", async () => {
    // TODO : implement
  });

  it("should sign in a user", async () => {
    const user = await service.signin(
      { session: { token: null } },
      {
        email: _mockUser.email,
      }
    );
    expect(user).toBeDefined();
    expect(user.id).toEqual(1);
  });

  it("should sign out a user", async () => {
    const user = await service.signout({
      currentUser: _users[0],
      session: { token: null },
    });
    expect(user).toBeNull();
  });

  it("should generate a token", async () => {
    const token = service["generateToken"](1);
    expect(token).toBeDefined();
  });
});
