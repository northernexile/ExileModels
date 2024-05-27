import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key:fs.readFileSync('./src/cert/key.pem'),
    cert:fs.readFileSync('./src/cert/cert.pem')
  }
  const app = await NestFactory.create(AppModule,{
    snapshot:true,
    httpsOptions
  });

  const config = new DocumentBuilder()
    .setTitle('ExileModels API')
    .setDescription('API documentation for ExileModels')
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
