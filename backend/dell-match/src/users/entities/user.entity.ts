/**
 * IMPORTANT CAVEAT ABOUT TYPEORM METHODS & HOOK DECORATORS
 *
 * save(), remove() : hooks will be executed if called with entity instances
 * insert(), update(), delete() : hooks will NOT be executed
 * @AfterInsert, @AfterUpdate, ...: executed ONLY upon entity instances, NOT upon plain objects
 */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Project } from "./../../projects/entities/project.entity";
//////////////////////////////////////////////////////////////////////////////////////

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  jobTitle: string;

  @Column()
  city: string;

  @Column()
  country: string;

  /**
   * () => Project : solves circular dependency issue
   * project => project.user : critical to multiple relationships scenarios eg Reports, Users, Approvers
   */
  @OneToMany((type) => Project, (project) => project.manager)
  projects: Project[];
}
