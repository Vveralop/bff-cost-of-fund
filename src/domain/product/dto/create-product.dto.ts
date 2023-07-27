import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProductId {
   id: string;
}

class ForecastCurve {
  curveName: string;
  forecastCurve: string;
  fixingFrequency: string;
}

class _Options {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  rateType: string;

  @IsNotEmpty()
  isActive: boolean;

  @IsNotEmpty()
  structure: string;

  @IsNotEmpty()
  dayCounter: string;

  @IsNotEmpty()
  compounding: string;

  @IsNotEmpty()
  allowPartialDisbursements: string;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  minNotional: number;

  @IsNotEmpty()
  maxNotional: number;

  @IsNotEmpty()
  minStartTenor: string;

  @IsNotEmpty()
  maxStartTenor: string;

  @IsNotEmpty()
  maxEndTenor: string;

  @IsNotEmpty()
  discountCurve: string;

  forecastCurves: [ ForecastCurve ];

  @IsNotEmpty()
  paymentFrequencies: [ string ];
}

export class CreateProductInput {
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  description: string;
  
  @IsNotEmpty()
  productType: string;

  @IsNotEmpty()
  options: [ _Options ];
}