import { Prisma } from '@prisma/client';
export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  email: string;
  senha: string;
  nome: string;
  createdAt?: Date;
  updatedAt?: Date;
}
