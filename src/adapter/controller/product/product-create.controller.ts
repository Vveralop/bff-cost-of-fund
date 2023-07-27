import { UseFilters, Controller, Post, HttpStatus, Headers, Body } from '@nestjs/common';
import { ApiBody, ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ProductCreateUseCase } from '../../../application/product/usecase/product-create.usecase';
import { CreateProductInput } from '../../../domain/product/dto/create-product.dto';
import { ResultBclCreateProduct, ValidateHeaderDto } from '../../../domain/product/entities/product.entity';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@ApiTags('Save product data')
@UseFilters(HttpExceptionFilter)
@Controller('product')
export class ProductCreateController {
    constructor( private productCreateUseCase: ProductCreateUseCase) {}

    @Post()
    @ApiBody({ type: CreateProductInput })
    @ApiOkResponse({ description: 'Created' })
    @ApiUnauthorizedResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized operation" })
    @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Operation not found' })
    async createProduct(@Body() body: CreateProductInput, @Headers() headers: ValidateHeaderDto): 
        Promise<ResultBclCreateProduct | any> {
        const transac = headers.transactionId;
        const channelid = headers.channelId;
        return await this.productCreateUseCase.createProduct(body, transac, channelid);
    }
}

