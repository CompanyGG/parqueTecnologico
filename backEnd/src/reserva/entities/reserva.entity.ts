import { Prisma } from '@prisma/client';

export class Reserva implements Prisma.ReservaUncheckedCreateInput {
  id?: string;
  confirmado?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
