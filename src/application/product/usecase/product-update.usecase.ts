import { Injectable } from '@nestjs/common';
import { CreateProductInput, ProductId } from '../../../domain/product/dto/create-product.dto';
import { ProductUpdateService } from '../../../domain/product/service';

@Injectable()
export class ProductUpdateUseCase {
    constructor(private productUpdateService: ProductUpdateService){}

    updateProduct(id: ProductId, body: CreateProductInput, transactionId: string, channelId: string){
        return this.productUpdateService.updateProduct(id, body, transactionId, channelId);
    }
}
