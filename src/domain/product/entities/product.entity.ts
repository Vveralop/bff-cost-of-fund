import { ApiProperty } from "@nestjs/swagger";
import { CreateProductInput, ProductId } from "../dto/create-product.dto";
import { IsDefined, IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";

export class ResultBclProduct {
    statusCode: number;
    message: string;
    data: CreateProductInput | any ;
}

export class ResultBclCreateProduct {
    statusCode: number;
    message: string;
    data: ProductId | any;
}

export interface ResultProduct {
    message: MessageType;
    data: CreateProductInput | ProductId;
}

export interface MessageType {
    returnMessage: ReturnMessageType[];
}
export interface ReturnMessageType {
    code: number;
    message: string;
    internalMessage: string;
}

export class ValidateHeaderDto{
    @ApiProperty({
        description: 'TransactionId',
        required: true,
    })
    @IsNotEmpty()
    @IsDefined()
    @Expose({ name: 'transaction-id' })
    transactionid: string;

    @ApiProperty({
        description: 'Id de Canal',
        required: true,
    })
    @IsNotEmpty()
    @IsDefined()
    @Expose({ name: 'channel-id' })
    channelId: string;

    // @ApiProperty({
    //     description: 'Id Aplicación',
    // })
    // @IsNotEmpty()
    // @IsDefined()
    // @Expose({ name: 'application' })
    // application: string;

    // @ApiProperty({
    //     description: 'Id de Canal',
    // })
    // @IsNotEmpty()
    // @IsDefined()
    // @Expose({ name: 'timestamp' })
    // timestamp: string;
}