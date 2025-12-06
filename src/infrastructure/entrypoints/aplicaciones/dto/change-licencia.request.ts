import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNumber, IsString, Min } from 'class-validator';

const LICENCIAS = ['gratuita', 'pago', 'opensource', 'empresarial'];

export class ChangeLicenciaRequest {
  @ApiProperty({ example: 'gratuita', enum: LICENCIAS })
  @IsString()
  @IsIn(LICENCIAS)
  licencia!: string;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @Min(0)
  precio!: number;
}
