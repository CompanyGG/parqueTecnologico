import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ReservaService } from './reserva.service';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly __reservaService: ReservaService) {}

  @Post()
  public async create(@Body() createReservaDto: CreateReservaDto) {
    return await this.__reservaService.create(createReservaDto).catch((e) => {
      throw new InternalServerErrorException(e.message);
    });
  }

  @Get()
  public async findAll() {
    return await this.__reservaService.findAll().catch((e) => {
      throw new InternalServerErrorException(e.message);
    });
  }

  @Get(':id')
  public async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.__reservaService.findOne(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReservaDto: UpdateReservaDto,
  ) {
    return await this.__reservaService
      .update(id, updateReservaDto)
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.__reservaService.remove(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
