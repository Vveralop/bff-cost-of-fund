import { Module } from '@nestjs/common';
import { ProductCreateUseCase } from './product-create.usecase';
import { ProductUpdateUseCase } from './product-update.usecase';
import { ProductDeleteUseCase } from './product-delete.usecase';
import { ProductSelectUseCase } from './product-select.usecase';

@Module({
  imports: [],
  providers: [ProductCreateUseCase, ProductUpdateUseCase, ProductDeleteUseCase, ProductSelectUseCase],
  exports: [ProductCreateUseCase, ProductUpdateUseCase, ProductDeleteUseCase, ProductSelectUseCase],
})
export class ProductUsecaseModule {}
