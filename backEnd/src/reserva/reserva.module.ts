import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReservaController],
  providers: [ReservaService, PrismaService],
})
export class ReservaModule {}
