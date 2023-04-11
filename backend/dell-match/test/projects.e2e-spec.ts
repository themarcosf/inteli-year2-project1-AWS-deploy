import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import { AppModule } from "../src/app.module";
//////////////////////////////////////////////////////////////////////////////////////

describe("Users component (e2e)", () => {
  /** dependency instances */
  let app: INestApplication;

  /** mock variables */
  const _mockProject = {
    name: "Project 1",
    area: "it",
    description: "Project 1 description",
    keywords: ["keyword1", "keyword2"],
    manager: "John Doe",
    teamSize: 5,
    teamMembers: ["John Doe", "Jane Doe"],
    status: "open",
    applicationDeadline: new Date("2023-03-31"),
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-04-30"),
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
  it("should create a new project @POST /projects", async () => {
    await request(app.getHttpServer())
      .post("/projects")
      .send(_mockProject)
      .expect(201)
      .then((res) => {
        const { id, name, area } = res.body;
        expect([id, name, area]).toBeDefined();
        expect(name).toEqual(_mockProject.name);
        expect(area).toEqual(_mockProject.area);
      });
  });

  it("should return a project @GET /projects/:id", async () => {
    await request(app.getHttpServer())
      .get("/projects/1")
      .expect(200)
      .then((res) => {
        const { id, name, area } = res.body;
        expect([id, name, area]).toBeDefined();
        expect(name).toEqual(_mockProject.name);
        expect(area).toEqual(_mockProject.area);
      });
  });

  it("should return all projects @GET /projects", async () => {
    await request(app.getHttpServer())
      .get("/projects")
      .expect(200)
      .then((res) => {
        expect(res.body).toBeDefined();
        expect(res.body.length).toBeGreaterThan(0);
      });
  });

  it("should update a project @PATCH /projects/:id", async () => {
    await request(app.getHttpServer())
      .patch("/projects/1")
      .send({ name: "Project 1 updated" })
      .expect(200)
      .then((res) => {
        const { id, name, area } = res.body;
        expect([id, name, area]).toBeDefined();
        expect(name).toEqual("Project 1 updated");
        expect(area).toEqual(_mockProject.area);
      });
  });

  it("should delete a project @DELETE /projects/:id", async () => {
    await request(app.getHttpServer()).delete("/projects/1").expect(200);
  });

  it("should return a 404 if project is not found @GET /projects/:id", async () => {
    await request(app.getHttpServer()).get("/projects/100").expect(404);
  });

  it("should return a 404 if project is not found @PATCH /projects/:id", async () => {
    await request(app.getHttpServer())
      .patch("/projects/100")
      .send({ name: "Project 1 updated" })
      .expect(404);
  });

  it("should return a 404 if project is not found @DELETE /projects/:id", async () => {
    await request(app.getHttpServer()).delete("/projects/100").expect(404);
  });

  it("should return a 400 if project id is not a number @GET /projects/:id", async () => {
    await request(app.getHttpServer()).get("/projects/abc").expect(400);
  });

  it("should return a 400 if project id is not a number @PATCH /projects/:id", async () => {
    await request(app.getHttpServer())
      .patch("/projects/abc")
      .send({ name: "Project 1 updated" })
      .expect(400);
  });

  it("should return a 400 if project id is not a number @DELETE /projects/:id", async () => {
    await request(app.getHttpServer()).delete("/projects/abc").expect(400);
  });

  it("should validate incoming data using data transfer objects @POST /projects", async () => {
    await request(app.getHttpServer())
      .post("/projects")
      .send({ ..._mockProject, department: "accounting" })
      .expect(201)
      .then((res) => {
        expect(res.body).not.toHaveProperty("department");
      });
  });

  it("should revert if body does not contain all required fields @POST /projects", async () => {
    await request(app.getHttpServer())
      .post("/projects")
      .send({ ..._mockProject, name: undefined })
      .expect(400);
  });

  it("should revert if information on request body is of incorrect type @POST /projects", async () => {
    await request(app.getHttpServer())
      .post("/projects")
      .send({ ..._mockProject, teamSize: "5" })
      .expect(400);
  });
});
