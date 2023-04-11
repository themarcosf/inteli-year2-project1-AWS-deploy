/**
 * IMPORTANT ODDITY ABOUT SQL QUERIES
 * find*(arg) methods : if arg = null | undefined returns first element in table
 */
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Project } from "./entities/project.entity";
import { User } from "../users/entities/user.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";

import { throwError } from "../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectsRepository: Repository<Project>
  ) {}

  async create(
    createProjectDto: CreateProjectDto,
    user: User
  ): Promise<Project> {
    const [_projectExists] = await this.findAll(createProjectDto.name);
    if (_projectExists)
      throwError("BadRequestException", "Project already exists");

    const _project = this.projectsRepository.create(createProjectDto);
    _project.manager = user;
    return await this.projectsRepository.save(_project);
  }

  async findAll(projectName?: string): Promise<Project[]> {
    const _query = this.projectsRepository.createQueryBuilder("Project");
    _query.leftJoinAndSelect("Project.manager", "manager");
    _query.select(["Project", "manager.name", "manager.email"]);

    if (projectName)
      _query.andWhere("Project.name = :projectName", { projectName });

    return await _query.getMany();
  }

  async findOne(id: number): Promise<Project> {
    const _query = this.projectsRepository.createQueryBuilder("Project");
    _query.leftJoinAndSelect("Project.manager", "manager");
    _query.select(["Project", "manager.name", "manager.email"]);
    _query.andWhere("Project.id = :id", { id });

    const _project = await _query.getOne();
    if (!_project) throwError("NotFoundException", "Project not found");

    return _project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const _project = await this.findOne(id);
    return await this.projectsRepository.save(
      Object.assign(_project, updateProjectDto)
    );
  }

  async remove(id: number) {
    const _project = await this.findOne(id);
    await this.projectsRepository.remove(_project);
    return;
  }
}
