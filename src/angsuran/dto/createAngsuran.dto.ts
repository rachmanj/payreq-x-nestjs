import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateAngsuranDto {
  @IsNotEmpty()
  installmentCode: string;

  @IsNotEmpty()
  creditorName: string;

  startDate: Date;

  installmentPeriod: number;
  description: string;
  capital: number;
  userId: number;
}
