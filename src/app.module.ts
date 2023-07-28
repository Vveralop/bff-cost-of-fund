import { Module } from '@nestjs/common';
import { ProductModule } from './domain/product/product.module';
import { LoggerModule } from './adapter/Logger/logger.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { InterceptorModule } from './shared/interceptor/interceptor.module';
import { HealthModule } from './domain/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule,
    TerminusModule,
    InterceptorModule,
    HealthModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
