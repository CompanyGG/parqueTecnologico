import { Reserva } from '../entities/reserva.entity';
import { IsBoolean, IsOptional } from 'class-validator';
export class CreateReservaDto extends Reserva {
  @IsBoolean()
  @IsOptional()
  confirmado?: boolean;
}
