import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiDefaultResponse } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserReqDTO } from '../dtos/create-user.req.dto';
import { UserResDTO } from '../dtos/user.res.dto';
import { plainToClass } from 'class-transformer';

@ApiTags('Usuários')
@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('users')
  @ApiOperation({ summary: 'Criação de usuário', description: 'Cria um novo usuário no sistema.' })
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso.',
    type: UserResDTO,
  })
  public async createUser(@Body() payload: CreateUserReqDTO): Promise<UserResDTO> {
    return plainToClass(UserResDTO, await this.service.proxyCreateUser(payload), {
      excludeExtraneousValues: true,
    });
  }

  @Get('users')
  @ApiOperation({
    summary: 'Listagem de usuários',
    description: 'Lista todos os usuários cadastrados no sistema.',
  })
  @ApiDefaultResponse({
    description: 'Lista de usuários retornada com sucesso',
    type: [UserResDTO],
  })
  public async findAllUsers(): Promise<UserResDTO[]> {
    const result = await this.service.proxyFindAllUsers();
    return result.map(user => plainToClass(UserResDTO, user, { excludeExtraneousValues: true }));
  }

  @Get('users/:id')
  @ApiOperation({
    summary: 'Busca de usuário por ID',
    description: 'Retorna os dados de um usuário específico pelo seu ID.',
  })
  @ApiDefaultResponse({
    description: 'Usuário encontrado com sucesso',
    type: UserResDTO,
  })
  public async findUserById(@Param('id') userId: string): Promise<UserResDTO> {
    const user = await this.service.proxyFindUserById(userId);
    return plainToClass(UserResDTO, user, { excludeExtraneousValues: true });
  }

  @Delete('users/:id')
  @ApiOperation({
    summary: 'Exclusão de usuário por id',
    description: 'Excluí um usuário do sistema.',
  })
  @ApiDefaultResponse({
    description: 'Usuário deletado com sucesso',
  })
  public async deleteUser(@Param('id') userId: string): Promise<void> {
    return await this.service.proxyDeleteUser(userId);
  }
}
