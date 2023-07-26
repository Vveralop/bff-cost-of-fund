import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './domain/product/product.module';
import { LoggerModule } from './adapter/Logger/logger.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { InterceptorModule } from './shared/interceptor/interceptor.module';
import { HealthModule } from './domain/health/health.module';
import { ProductController } from './adapter/controller/product/product.controller';
import { ProductUseCase } from './application/product/usecase/product.usecase';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule,
    TerminusModule,
    InterceptorModule,
    HealthModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
