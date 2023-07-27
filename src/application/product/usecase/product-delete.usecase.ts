import { Injectable } from '@nestjs/common';
import { ProductId } from '../../../domain/product/dto/create-product.dto';
import { ProductDeleteService } from '../../../domain/product/service/product-delete.service';

@Injectable()
export class ProductDeleteUseCase {
    constructor(private productDeleteService: ProductDeleteService){}

    deleteProduct(id: ProductId, transactionId: string, channelId: string){
        return this.productDeleteService.deleteProduct(id, transactionId, channelId);
    }
}
