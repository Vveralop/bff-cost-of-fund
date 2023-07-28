import { Injectable } from '@nestjs/common';
import { ProductId } from '../../../domain/product/dto/create-product.dto';
import { ProductSelectService } from '../../../domain/product/service';

@Injectable()
export class ProductSelectUseCase {
    constructor(private productSelectService: ProductSelectService){}

    selectProduct(id: ProductId, transactionId: string, channelId: string){
        return this.productSelectService.selectProduct(id, transactionId, channelId);
    }
}
