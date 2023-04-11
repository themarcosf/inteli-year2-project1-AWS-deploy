/**
 * IMPORTANT CAVEAT ABOUT TESTING CONTROLLERS
 *
 * controllers should not have complex logic so tests should be really simple
 * all programming and business logic should be implemented elsewhere
 */
import { Test, TestingModule } from "@nestjs/testing";

import { Project } from "./entities/project.entity";
import { ProjectsService } from "./projects.service";
import { User } from "src/users/entities/user.entity";
import { ProjectsController } from "./projects.controller";
import { CreateProjectDto } from "./dto/create-project.dto";
//////////////////////////////////////////////////////////////////////////////////////

describe("ProjectsController", () => {
  /** dependency instances */
  let controller: ProjectsController;
  let _projectsService: Partial<ProjectsService>;

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

  const _mockUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** mock dependency instances and module */
  beforeEach(async () => {
    let _projects: Project[] = [];

    _projectsService = {
      create: (_project: CreateProjectDto) => {
        const project = Object.assign({ id: 1 }, _project) as Project;
        _projects.push(project);
        return Promise.resolve(project);
      },

      findAll: (name?: string) => {
        return name
          ? Promise.resolve(
              _projects.filter((project) => project.name === name)
            )
          : Promise.resolve(_projects);
      },

      findOne: (id: number) => {
        return Promise.resolve(_projects.find((project) => project.id === id));
      },

      update: (id: number, _project: Partial<Project>) => {
        const index = _projects.findIndex((project) => project.id === id);
        _projects[index] = Object.assign(_projects[index], _project);
        return Promise.resolve(_projects[index]);
      },

      remove: (id: number) => {
        _projects = _projects.filter((project) => project.id !== id);
        return Promise.resolve();
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [{ provide: ProjectsService, useValue: _projectsService }],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  /** test suite */
  it("can create an instance of ProjectsController", () => {
    expect(controller).toBeDefined();
  });

  it("should create new project @POST /projects", async () => {
    const _project = await controller.create(_mockProject, _mockUser as User);
    expect(_project).toEqual({ id: 1, ..._mockProject });
  });

  it("should return all projects @GET /projects", async () => {
    await controller.create(_mockProject, _mockUser as User);
    const _projects = await controller.findAll();
    expect(_projects).toEqual([{ id: 1, ..._mockProject }]);
  });

  it("should return all projects by name @GET /projects?name=Project 1", async () => {
    await controller.create(_mockProject, _mockUser as User);
    const _projects = await controller.findAll("Project 1");
    expect(_projects).toEqual([{ id: 1, ..._mockProject }]);
  });

  it("should return a project by id @GET /projects/:id", async () => {
    await controller.create(_mockProject, _mockUser as User);
    const _project = await controller.findOne("1");
    expect(_project).toEqual({ id: 1, ..._mockProject });
  });

  it("should update a project by id @PUT /projects/:id", async () => {
    await controller.create(_mockProject, _mockUser as User);
    const _project = await controller.update("1", {
      name: "Project 2",
    });
    expect(_project).toEqual({ id: 1, ..._mockProject, name: "Project 2" });
  });

  it("should delete a project by id @DELETE /projects/:id", async () => {
    await controller.create(_mockProject, _mockUser as User);
    await controller.remove("1");
    const _projects = await controller.findAll();
    expect(_projects).toEqual([]);
  });
});
