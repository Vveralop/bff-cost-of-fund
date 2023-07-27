import { Injectable } from '@nestjs/common';
import { CreateProductInput } from '../../../domain/product/dto/create-product.dto';
import { ProductCreateService } from '../../../domain/product/service/product-create.service';

@Injectable()
export class ProductCreateUseCase {
    constructor(private productService: ProductCreateService){}

    createProduct(body: CreateProductInput, transactionId: string, channelId: string){
        return this.productService.createProduct(body, transactionId, channelId);
    }
}
