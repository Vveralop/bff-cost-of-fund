import { UseFilters, Controller, Post, HttpStatus, Headers, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ProductUseCase } from '../../../application/product/usecase/product.usecase';
import { CreateProductInput } from '../../../domain/product/dto/create-product.dto';
import { ResultBclCreateProduct, ValidateHeaderDto } from '../../../domain/product/entities/product.entity';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@ApiTags('Save product data')
@UseFilters(HttpExceptionFilter)
@Controller('product')
export class ProductController {
    constructor( private productUseCase: ProductUseCase) {}

    @Post()
    @ApiOkResponse({ description: 'Record Created' })
    @ApiUnauthorizedResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized operation" })
    @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Operation not found' })
    async createProduct(@Body() body: CreateProductInput, @Headers() headers: ValidateHeaderDto): 
        Promise<ResultBclCreateProduct | any> {
        const channelId = headers['channel-id'];
        const transactionId = headers['transaction-id'];
        const val = await this.productUseCase.createProduct(body, transactionId, channelId );
        return val;
    }
}

