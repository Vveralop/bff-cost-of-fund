import { Module } from '@nestjs/common';
import {} from '../../adapter/controller/product/product-create.controller';
import { LoggerService } from '../../adapter/Logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import {} from '../../adapter/controller/product/product-update.controller';
import {} from '../../adapter/controller/product/product-select.controller';
import {
  ProductSelectUseCase,
  ProductSelectAllUseCase,
  ProductDeleteUseCase,
  ProductUpdateUseCase,
  ProductCreateUseCase,
} from '../../application/product/usecase';
import {
  ProductSelectService,
  ProductSelectAllService,
  ProductDeleteService,
  ProductUpdateService,
  ProductCreateService,
} from './service';
import { ProductDeleteController } from '../../adapter/controller/product/product-delete.controller';
import { ProductSelectController } from '../../adapter/controller/product/product-select.controller';
import { ProductSelectAllController } from '../../adapter/controller/product/product-select-all.controller';
import { ProductCreateController } from '../../adapter/controller/product/product-create.controller';
import { ProductUpdateController } from '../../adapter/controller/product/product-update.controller';

@Module({
  imports: [HttpModule],
  providers: [
    LoggerService,
    ConfigService,
    ProductCreateService,
    ProductUpdateService,
    ProductSelectService,
    ProductSelectAllService,
    ProductDeleteService,
    ProductCreateUseCase,
    ProductUpdateUseCase,
    ProductSelectUseCase,
    ProductSelectAllUseCase,
    ProductDeleteUseCase,
  ],
  controllers: [
    ProductCreateController,
    ProductUpdateController,
    ProductSelectController,
    ProductSelectAllController,
    ProductDeleteController,
  ],
})
export class ProductModule {}
