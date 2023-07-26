import { Module } from '@nestjs/common';
import { ProductUseCase } from './product.usecase';

@Module({
  imports: [],
  providers: [ProductUseCase],
  exports: [ProductUseCase],
})
export class ProductUsecaseModule {}
