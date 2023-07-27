import { UseFilters, Controller, HttpStatus, Headers, Get, Param } from '@nestjs/common';
import { ApiBody, ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ProductSelectUseCase } from '../../../application/product/usecase/product-select.usecase';
import { CreateProductInput, ProductId } from '../../../domain/product/dto/create-product.dto';
import { ResultBclCreateProduct, ValidateHeaderDto } from '../../../domain/product/entities/product.entity';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@ApiTags('Save product data')
@UseFilters(HttpExceptionFilter)
@Controller('product')
export class ProductSelectController {
    constructor( private productSelectUseCase: ProductSelectUseCase) {}

    @Get(':id')
    @ApiOkResponse({ description: 'OK' })
    @ApiUnauthorizedResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized operation" })
    @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Operation not found' })
    async selectProduct(@Param() params, @Headers() headers: ValidateHeaderDto): 
        Promise<ResultBclCreateProduct | any> {
        const transac = headers.transactionId;
        const channelid = headers.channelId;
        const id = params.id;
        return await this.productSelectUseCase.selectProduct(id, transac, channelid);
    }
}

