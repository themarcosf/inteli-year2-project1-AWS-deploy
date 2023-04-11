import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Project } from "./entities/project.entity";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [TypeOrmModule],
})
export class ProjectsModule {}
