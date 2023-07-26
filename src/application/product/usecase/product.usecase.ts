import { Injectable } from '@nestjs/common';
import { CreateProductInput } from '../../../domain/product/dto/create-product.dto';
import { ProductService } from '../../../domain/product/service/product.service';

@Injectable()
export class ProductUseCase {
    constructor(private productService: ProductService){}

    createProduct(body: CreateProductInput, transactionId: string, channelId: string){
        return this.productService.createProduct(body, transactionId, channelId);
    }
}
