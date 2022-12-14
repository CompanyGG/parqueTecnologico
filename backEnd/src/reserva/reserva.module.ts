import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';

@Module({
  controllers: [ReservaController],
  providers: [ReservaService, PrismaService],
})
export class ReservaModule {}
