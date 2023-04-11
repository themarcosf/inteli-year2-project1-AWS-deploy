import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import { AppModule } from "../src/app.module";
//////////////////////////////////////////////////////////////////////////////////////

describe("Users component (e2e)", () => {
  /** dependency instances */
  let app: INestApplication;

  /** mock variables */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** dummy dependency instance and module */
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /** test suite */
  describe("Authentication (e2e)", () => {
    it("should signup a new user @POST /auth/signup", async () => {
      await request(app.getHttpServer())
        .post("/users/signup")
        .send(_mockUser)
        .expect(201)
        .then((res) => {
          const { id, name, email } = res.body;
          expect([id, name, email]).toBeDefined();
          expect(name).toEqual(_mockUser.name);
          expect(email).toEqual(_mockUser.email);
        });
    });

    it("should signin a user @POST /auth/signin", async () => {
      await request(app.getHttpServer())
        .post("/users/signin")
        .send({ email: _mockUser.email }) // password is not required
        .expect(201)
        .then((res) => {
          const { id, name, email } = res.body;
          expect([id, name, email]).toBeDefined();
          expect(name).toEqual(_mockUser.name);
          expect(email).toEqual(_mockUser.email);
        });
    });

    it("should signout a user @POST /auth/signout", async () => {
      // TODO : implement this test
    });
  });

  describe("Token management (e2e)", () => {});

  describe("Users (e2e)", () => {
    it("should delete a user @DELETE /users/:id", async () => {
      await request(app.getHttpServer()).delete("/users/1").expect(200);
    });

    it("should create a new user @POST /users", async () => {
      await request(app.getHttpServer())
        .post("/users")
        .send(_mockUser)
        .expect(201)
        .then((res) => {
          const { id, name, email } = res.body;
          expect([id, name, email]).toBeDefined();
          expect(name).toEqual(_mockUser.name);
          expect(email).toEqual(_mockUser.email);
        });
    });

    it("should return a user @GET /users/:id", async () => {
      await request(app.getHttpServer())
        .get("/users/2")
        .expect(200)
        .then((res) => {
          const { id, name, email } = res.body;
          expect([id, name, email]).toBeDefined();
          expect(name).toEqual(_mockUser.name);
          expect(email).toEqual(_mockUser.email);
        });
    });

    it("should return all users @GET /users", async () => {
      await request(app.getHttpServer())
        .get("/users")
        .expect(200)
        .then((res) => {
          expect(res.body.length).toBeGreaterThan(0);
        });
    });

    it("should update a user @PATCH /users/:id", async () => {
      await request(app.getHttpServer())
        .patch("/users/2")
        .send({ name: "Jane Doe" })
        .expect(200)
        .then((res) => {
          const { id, name, email } = res.body;
          expect([id, name, email]).toBeDefined();
          expect(name).toEqual("Jane Doe");
          expect(email).toEqual(_mockUser.email);
        });
    });
  });

  it("should return a 404 if user is not found @GET /users/:id", async () => {
    await request(app.getHttpServer()).get("/users/999").expect(404);
  });

  it("should return a 404 if user is not found @PATCH /users/:id", async () => {
    await request(app.getHttpServer()).patch("/users/999").expect(404);
  });

  it("should return a 404 if user is not found @DELETE /users/:id", async () => {
    await request(app.getHttpServer()).delete("/users/999").expect(404);
  });

  it("should return a 400 if user id is not a number @GET /users/:id", async () => {
    await request(app.getHttpServer()).get("/users/abc").expect(400);
  });

  it("should return a 400 if user id is not a number @PATCH /users/:id", async () => {
    await request(app.getHttpServer()).patch("/users/abc").expect(400);
  });

  it("should return a 400 if user id is not a number @DELETE /users/:id", async () => {
    await request(app.getHttpServer()).delete("/users/abc").expect(400);
  });

  it("should validate incoming data using data transfer objects @POST /users", async () => {
    await request(app.getHttpServer()).delete("/users/2").expect(200);
    await request(app.getHttpServer())
      .post("/users")
      .send({ ..._mockUser, age: 30 })
      .expect(201)
      .then((res) => {
        expect(res.body).not.toHaveProperty("age");
      });
  });

  it("should revert if body does not contain all required fields @POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send({ ..._mockUser, name: undefined })
      .expect(400);
  });

  it("should revert if information on request body is of incorrect type @POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send({ ..._mockUser, name: 123 })
      .expect(400);
  });
});
