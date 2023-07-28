import { UseFilters, Controller, HttpStatus, Headers, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ProductDeleteUseCase } from '../../../application/product/usecase';
import { ResultBclCreateProduct, ValidateHeaderDto } from '../../../domain/product/entities/product.entity';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@ApiTags('Save product data')
@UseFilters(HttpExceptionFilter)
@Controller('product')
export class ProductDeleteController {
    constructor( private productDeleteUseCase: ProductDeleteUseCase) {}

    @Delete(':id')
    @ApiOkResponse({ description: 'OK' })
    @ApiUnauthorizedResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized operation" })
    @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Operation not found' })
    async selectProduct(@Param() params, @Headers() headers: ValidateHeaderDto): 
        Promise<ResultBclCreateProduct | any> {
        const transac = headers.transactionId;
        const channelid = headers.channelId;
        const id = params.id;
        return await this.productDeleteUseCase.deleteProduct(id, transac, channelid);
    }
}

