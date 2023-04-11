import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
  Headers,
} from "@nestjs/common";

import { Project } from "./entities/project.entity";
import { ProjectsService } from "./projects.service";
import { User } from "./../users/entities/user.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { CurrentUser } from "./../users/decorators/current-user.decorator";

import { throwError } from "./../utils/throwError.util";

import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse, ApiBadRequestResponse, ApiOperation } from '@nestjs/swagger';
//////////////////////////////////////////////////////////////////////////////////////

@ApiTags('project')

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiOperation({ summary: 'create a new project' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  create(
    @Headers() headers: Headers,
    @Body() createProjectDto: CreateProjectDto,
    @CurrentUser() user: User
  ): Promise<Project> {
    return this.projectsService.create(createProjectDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'find all projects' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  findAll(@Query("name") name?: string): Promise<Project[]> {
    return this.projectsService.findAll(name);
  }

  @Get(":id")
  @ApiOperation({ summary: 'find project by id' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({ description: 'User id is not a number.'})
  findOne(@Param("id") id: string): Promise<Project> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: 'update an existing project' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({ description: 'User id is not a number.'})
  update(
    @Param("id") id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: 'delete an existing project' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({ description: 'User id is not a number.'})
  remove(@Param("id") id: string): Promise<void> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.remove(+id);
  }
}
