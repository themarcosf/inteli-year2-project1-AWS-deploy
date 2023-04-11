/**
 * WARNING : cookie-session store in the client's browser is not secure.
 */
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MiddlewareConsumer, Module } from "@nestjs/common";

import * as cookieParser from "cookie-parser";
import * as cookieSession from "cookie-session";

import { UsersModule } from "./users/users.module";
import { ProjectsModule } from "./projects/projects.module";
import { CurrentUserMiddleware } from "./users/middleware/current-user.middleware";
import { HealthModule } from './health/health.module';
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.RDS_HOSTNAME,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: 3306,
      database: process.env.RDS_DATABASE,
      autoLoadEntities: true,
      synchronize: true /** @dev DO NOT use synchronize:true in production */,
    }),
    HealthModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    const _cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      secure: false, // cookie will only be sent on an encrypted connection
    };

    consumer
       .apply(
         ...[
           cookieSession({
             secret: process.env.SESSION_SECRET,
             resave: false,
             saveUninitialized: false,
             cookie: _cookieOptions,
           }),
           cookieParser(),
           CurrentUserMiddleware,
         ]
       )
       .forRoutes("*");
  }
}
