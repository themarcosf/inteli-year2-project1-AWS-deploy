import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
//////////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new project */
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: true,
    methods: 'GET,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Authorization"],
    maxAge: 3600,
  });

  /** set empty global validation pipe; configured at handler level */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle("Dell Match API Doc")
    .setDescription(
      "This is the Dell Match API Documentation, and it contains all of the application endpoints."
    )
    .setVersion("1.0")
    //.addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  /** start server listener */
  await app.listen(3000, () => console.log("Server running on port 3000."));
})();
