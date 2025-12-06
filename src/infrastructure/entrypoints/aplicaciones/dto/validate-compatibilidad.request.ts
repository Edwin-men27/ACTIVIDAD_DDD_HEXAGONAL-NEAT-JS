import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class ValidateCompatibilidadRequest {
  @ApiProperty({ example: 'Windows 11' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  sistemaOperativoUsuario!: string;

  @ApiProperty({ example: 64 })
  @IsNumber()
  @Min(0)
  arquitecturaBitsUsuario!: number;

  @ApiProperty({ example: '8GB RAM, 2 CPU', required: false })
  @IsString()
  @IsOptional()
  requisitosHardwareUsuario?: string;
}
