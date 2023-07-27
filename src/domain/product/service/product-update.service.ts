import { Injectable } from '@nestjs/common';
import { CreateProductInput, ProductId } from '../dto/create-product.dto';
import { ConfigService } from '@nestjs/config';
import { ResultBclCreateProduct } from '../entities/product.entity';
import { LoggerService } from '../../../adapter/Logger/logger.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductUpdateService {
    constructor(private readonly httpService: HttpService,
                private loggerService: LoggerService,
                private configService: ConfigService) {}

    async updateProduct(id: ProductId, body: CreateProductInput, transactionId: string, channelId: string): Promise<ResultBclCreateProduct>{
        try {
            const path_inner_acl = this.configService.get<string>('PATH_INNER_BCL');
            const url = `${path_inner_acl}/product/${id}`;
            const axiosRequestConfig = {
                headers: {
                  'Content-Type': 'application/json',
                  "Accept": "*/*",
                  'x-IBM-Client-Id': this.configService.get<string>('INNER_BCL_CLIENT_ID'),
                  'x-IBM-Client-Secret': this.configService.get<string>('INNER_BCL_CLIENT_SECRET'),
                  'channel-id': channelId,
                  'transaction-id': transactionId,
                  'application': this.configService.get<string>('APPLICATION'),
                  'timestamp': String(new Date())
                },
              };

              const resultSet = await this.httpService.patch(url, body, axiosRequestConfig)

              const response = await lastValueFrom(resultSet);
              const dataResponseApi: ResultBclCreateProduct = { 
                 statusCode: 200, 
                 message: 'Record Update',
                 data: { 'id': response.data.id }
              }
              return dataResponseApi;
        } catch (error) {
            if(!error.response){
                this.loggerService.catchError(
                    error.code,
                    error.cause,
                    error.message
                )
            }
            if(error.response.statusCode){
                this.loggerService.catchError(
                    String(error.response.statusCode),
                    error.response.error,
                    error.response.message
                )
            }
            else{
                this.loggerService.catchError(
                    error.response.data.httpCode,
                    error.status,
                    error.code
                )
            }
        }
    }
}
