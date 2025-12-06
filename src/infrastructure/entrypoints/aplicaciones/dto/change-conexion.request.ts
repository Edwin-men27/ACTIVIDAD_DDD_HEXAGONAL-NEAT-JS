import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class ChangeConexionRequest {
  @ApiProperty({ example: true })
  @IsBoolean()
  requiereConexionRed!: boolean;

  @ApiProperty({ example: 'https://app.ejemplo.com', required: false })
  @IsString()
  @IsOptional()
  @IsUrl()
  web?: string | null;
}
