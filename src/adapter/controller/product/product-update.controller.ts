import { UseFilters, Controller, HttpStatus, Headers, Body, Patch, Param } from '@nestjs/common';
import { ApiBody, ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiNotFoundResponse, ApiParam, ApiOperation } from '@nestjs/swagger';
import { ProductUpdateUseCase } from '../../../application/product/usecase';
import { CreateProductInput } from '../../../domain/product/dto/create-product.dto';
import { ResultBclCreateProduct, ValidateHeaderDto } from '../../../domain/product/entities/product.entity';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@ApiTags('Update product data')
@UseFilters(HttpExceptionFilter)
@Controller('product')
export class ProductUpdateController {
    constructor( private productUpdateUseCase: ProductUpdateUseCase) {}

    @Patch('/:id')
    @ApiOperation({
        summary: 'Update Product'
    })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: CreateProductInput })
    @ApiOkResponse({ description: 'OK' })
    @ApiUnauthorizedResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized operation" })
    @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Product not found' })
    async updateProduct(@Param() param, @Body() body: CreateProductInput, @Headers() headers: ValidateHeaderDto): 
        Promise<ResultBclCreateProduct | any> {
        const transac = headers.transactionId;
        const channelid = headers.channelId;
        const id = param.id;
        return await this.productUpdateUseCase.updateProduct(id, body, transac, channelid);
    }
}

