import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(private readonly __prisma: PrismaService) {}

  public async create(data: CreateReservaDto) {
    await this.__prisma.reserva.create({ data });
    return 'Pré reserva efetuada';
  }

  public async findAll() {
    return await this.__prisma.reserva.findMany();
  }

  public async findOne(id: string) {
    return await this.__prisma.reserva.findUniqueOrThrow({ where: { id } });
  }

  public async update(id: string, data: UpdateReservaDto) {
    return await this.__prisma.reserva.update({ where: { id }, data });
  }

  public async remove(id: string) {
    return await this.__prisma.reserva.delete({ where: { id } });
  }
}
