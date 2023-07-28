import {
  UseFilters,
  Controller,
  HttpStatus,
  Headers,
  Get,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ProductSelectAllUseCase } from '../../../application/product/usecase';
import {
  ResultBclCreateProduct,
  ValidateHeaderDto,
} from '../../../domain/product/entities/product.entity';
import { HttpExceptionFilter } from '../../../shared/interceptor/http.exception.filter';

@ApiTags('Save product data')
@UseFilters(HttpExceptionFilter)
@Controller('product')
export class ProductSelectAllController {
  constructor(private productSelectAllUseCase: ProductSelectAllUseCase) {}

  @Get()
  @ApiOkResponse({ description: 'OK' })
  @ApiUnauthorizedResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized operation',
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Operation not found',
  })
  async selectProduct(
    @Headers() headers: ValidateHeaderDto,
  ): Promise<ResultBclCreateProduct | any> {
    const transac = headers.transactionId;
    const channelid = headers.channelId;
    return await this.productSelectAllUseCase.selectProduct(transac, channelid);
  }
}
