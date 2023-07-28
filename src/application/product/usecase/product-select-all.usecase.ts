import { Injectable } from '@nestjs/common';
import { ProductSelectAllService } from '../../../domain/product/service';

@Injectable()
export class ProductSelectAllUseCase {
  constructor(private productSelectAllService: ProductSelectAllService) {}

  selectProduct(transactionId: string, channelId: string) {
    return this.productSelectAllService.selectProduct(transactionId, channelId);
  }
}
