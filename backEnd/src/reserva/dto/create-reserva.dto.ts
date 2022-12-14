import { IsBoolean, IsOptional } from 'class-validator';
import { Reserva } from '../entities/reserva.entity';
export class CreateReservaDto extends Reserva {
  @IsBoolean()
  @IsOptional()
  confirmado?: boolean;
}
