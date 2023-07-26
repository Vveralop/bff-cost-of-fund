import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from  './shared/interceptor/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const apiPrefix = app.get(ConfigService).get<string>('API_PREFIX');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix(apiPrefix);
  const config = new DocumentBuilder()
    .setTitle('Cost of Fund\'s BFF')
    .setDescription('Applications to serve a front cost of fund')
    .setVersion('1.0')
    .addTag('BFF Tesorería')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, validateCustomDecorators: true }));
  app.useLogger(app.get(Logger));
  const port = app.get(ConfigService).get<number>('PORT');
  await app.listen(port);
}
bootstrap();