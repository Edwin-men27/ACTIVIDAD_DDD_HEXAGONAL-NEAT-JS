import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class AddVersionRequest {
  @ApiProperty({ example: '1.1.0' })
  @IsString()
  @IsNotEmpty()
  numeroVersion!: string;

  @ApiProperty({ example: '2024-01-01', required: false })
  @IsOptional()
  @IsDateString()
  fechaPublicacion?: string;

  @ApiProperty({ example: 'Corrección de errores y mejoras' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  cambios!: string;
}
