import { Module } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductController } from '../../adapter/controller/product/product.controller';
import { LoggerService } from '../../adapter/Logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ProductUseCase } from '../../application/product/usecase/product.usecase';

@Module({
  imports: [HttpModule],
  providers: [ProductService, LoggerService, ConfigService, ProductUseCase],
  controllers: [ProductController]
})
export class ProductModule {}
