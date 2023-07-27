import { Module } from '@nestjs/common';
import { ProductCreateService } from './service/product-create.service';
import { ProductCreateController } from '../../adapter/controller/product/product-create.controller';
import { LoggerService } from '../../adapter/Logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ProductCreateUseCase } from '../../application/product/usecase/product-create.usecase';
import { ProductUpdateController } from '../../adapter/controller/product/product-update.controller';
import { ProductUpdateUseCase } from '../../application/product/usecase/product-update.usecase';
import { ProductUpdateService } from './service/product-update.service';
import { ProductSelectController } from '../../adapter/controller/product/product-select.controller';
import { ProductSelectUseCase } from '../../application/product/usecase/product-select.usecase';
import { ProductSelectService } from './service/product-select.service';
import { ProductDeleteService } from './service/product-delete.service';
import { ProductDeleteUseCase } from '../../application/product/usecase/product-delete.usecase';
import { ProductDeleteController } from '../../adapter/controller/product/product-delete.controller';

@Module({
  imports: [HttpModule],
  providers: [
    LoggerService,
    ConfigService,
    ProductCreateService,
    ProductUpdateService,
    ProductSelectService,
    ProductDeleteService,
    ProductCreateUseCase,
    ProductUpdateUseCase,
    ProductSelectUseCase,
    ProductDeleteUseCase
  ],
  controllers: [
    ProductCreateController, 
    ProductUpdateController, 
    ProductSelectController, 
    ProductDeleteController
    ],
})
export class ProductModule {}
