import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as process from 'node:process';

async function bootstrap() {
  const certKey = process.env.KEY_LOCATION ?? './src/cert/key.pem';
  const certLocation = process.env.CERT_LOCATION ?? './src/cert/cert.pem';

  const httpsOptions = {
    key: fs.readFileSync(certKey),
    cert: fs.readFileSync(certLocation),
  };
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    httpsOptions,
  });
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      'https://localhost:5173',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: false,
  });

  const config = new DocumentBuilder()
    .setTitle('ExileModels API')
    .setDescription('API documentation for ExileModels')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
