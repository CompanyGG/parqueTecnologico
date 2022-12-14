import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly __prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto) {
    const data: CreateUserDto = {
      ...createUserDto,
      senha: await bcrypt.hash(createUserDto.senha, 10),
    };

    const createdUser = await this.__prisma.user.create({ data });

    const response: CreateUserDto = {
      ...createdUser,
      senha: undefined,
    };

    return response;
  }

  public async findAll() {
    return this.__prisma.user.findMany();
  }

  public async findOne(id: number) {
    return this.__prisma.user.findUniqueOrThrow({ where: { id } });
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    const data: UpdateUserDto = {
      ...updateUserDto,
      senha: await bcrypt.hash(updateUserDto.senha, 10),
    };

    const updatedUser = this.__prisma.user.update({ where: { id }, data });

    const response: UpdateUserDto = {
      ...updatedUser,
      senha: undefined,
    };
    return response;
  }

  public async remove(id: number) {
    return this.__prisma.user.delete({ where: { id } });
  }
}
