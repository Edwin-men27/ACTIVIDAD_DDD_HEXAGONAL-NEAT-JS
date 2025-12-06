import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

const LICENCIAS = ['gratuita', 'pago', 'opensource', 'empresarial'];

export class UpdateAplicacionRequest {
  @ApiPropertyOptional({ example: 'ACME Corp' })
  @IsString()
  @IsOptional()
  @MaxLength(150)
  proveedor?: string;

  @ApiPropertyOptional({ example: 'Productividad' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  categoria?: string;

  @ApiPropertyOptional({ example: 'Node.js' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  lenguajePrincipal?: string;

  @ApiPropertyOptional({ example: 'TypeScript' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  lenguajeSecundario?: string | null;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  usaBaseDatos?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsBoolean()
  @IsOptional()
  requiereConexionRed?: boolean;

  @ApiPropertyOptional({ example: 64, enum: [32, 64] })
  @IsNumber()
  @IsOptional()
  numBits?: number;

  @ApiPropertyOptional({ example: 'Windows 11' })
  @IsString()
  @IsOptional()
  @MaxLength(120)
  sistemaOperativo?: string;

  @ApiPropertyOptional({ example: '8GB RAM, 2 CPU' })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  requisitosHardware?: string | null;

  @ApiPropertyOptional({ example: 'pago', enum: LICENCIAS })
  @IsString()
  @IsOptional()
  @IsIn(LICENCIAS)
  licencia?: string;

  @ApiPropertyOptional({ example: 0 })
  @IsNumber()
  @IsOptional()
  @Min(0)
  precio?: number;

  @ApiPropertyOptional({ example: 'Nueva descripción' })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  descripcion?: string | null;

  @ApiPropertyOptional({ example: 'https://app.ejemplo.com' })
  @IsString()
  @IsOptional()
  web?: string | null;

  @ApiPropertyOptional({ example: 'soporte@ejemplo.com' })
  @IsEmail()
  @IsOptional()
  correo?: string;

  @ApiPropertyOptional({ example: 120.4 })
  @IsNumber()
  @IsOptional()
  @Min(0)
  tamanoInstalador?: number;
}
