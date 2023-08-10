import { Injectable } from '@nestjs/common';
import { CreateProductInput } from '../dto/create-product.dto';
import { ConfigService } from '@nestjs/config';
import { ResultBclCreateProduct } from '../entities/product.entity';
import { LoggerService } from '../../../adapter/Logger/logger.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductCreateService {
  constructor(
    private readonly httpService: HttpService,
    private loggerService: LoggerService,
    private configService: ConfigService,
  ) {}

  async createProduct(
    body: CreateProductInput,
    transactionId: string,
    channelId: string,
  ): Promise<ResultBclCreateProduct> {
    try {
      const path_inner_acl = this.configService.get<string>('PATH_INNER_BCL');
      const url = `${path_inner_acl}/product`;
      const axiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'x-IBM-Client-Id': this.configService.get<string>(
            'INNER_BCL_CLIENT_ID',
          ),
          'x-IBM-Client-Secret': this.configService.get<string>(
            'INNER_BCL_CLIENT_SECRET',
          ),
          'channel-id': channelId,
          'transaction-id': transactionId,
          application: this.configService.get<string>('APPLICATION'),
          timestamp: String(new Date()),
        },
      };

      const resultSet = await this.httpService.post(
        url,
        body,
        axiosRequestConfig,
      );

      const response = await lastValueFrom(resultSet);
      const dataResponseApi: ResultBclCreateProduct = {
        statusCode: 201,
        message: 'Created',
        data: { id: response.data.id },
      };
      return dataResponseApi;
    } catch (error) {
      if (!error.response) {
        this.loggerService.catchError(error.code, error.cause, error.message);
      }
      if (error.response.statusCode) {
        this.loggerService.catchError(
          String(error.response.statusCode),
          error.response.error,
          error.response.message,
        );
      } else {
        this.loggerService.catchError(
          error.response.data.httpCode,
          error.status,
          error.code,
        );
      }
    }
  }
}
