import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

const LICENCIAS = ['gratuita', 'pago', 'opensource', 'empresarial'];

export class CreateAplicacionRequest {
  @ApiProperty({ example: 'Gestor de Tareas' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre!: string;

  @ApiProperty({ example: 'ACME Corp' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  proveedor!: string;

  @ApiProperty({ example: 'Productividad' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  categoria!: string;

  @ApiProperty({ example: 'Node.js' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  lenguajePrincipal!: string;

  @ApiProperty({ example: 'TypeScript', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  lenguajeSecundario?: string | null;

  @ApiProperty({ example: true })
  @IsBoolean()
  usaBaseDatos!: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  requiereConexionRed!: boolean;

  @ApiProperty({ example: 64, enum: [32, 64] })
  @IsNumber()
  numBits!: number;

  @ApiProperty({ example: 'Windows 11' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  sistemaOperativo!: string;

  @ApiProperty({ example: '8GB RAM, 2 CPU', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  requisitosHardware?: string | null;

  @ApiProperty({ example: 'pago', enum: LICENCIAS })
  @IsString()
  @IsIn(LICENCIAS)
  licencia!: string;

  @ApiProperty({ example: 49.99 })
  @IsNumber()
  @Min(0)
  precio!: number;

  @ApiProperty({ example: 'Aplicación para gestionar proyectos', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  descripcion?: string | null;

  @ApiProperty({ example: 'https://app.ejemplo.com', required: false })
  @IsString()
  @IsOptional()
  web?: string | null;

  @ApiProperty({ example: 'soporte@ejemplo.com' })
  @IsEmail()
  correo!: string;

  @ApiProperty({ example: 150.5 })
  @IsNumber()
  @Min(0)
  tamanoInstalador!: number;
}
