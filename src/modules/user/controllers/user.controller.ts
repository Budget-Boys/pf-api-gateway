import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserReqDTO } from '../dtos/create-user.req.dto';
import { CreateUserResDTO } from '../dtos/create-user.res.dto';
import { plainToClass } from 'class-transformer';

@ApiTags('Usuários')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criação de usuário', description: 'Cria um novo usuário no sistema.' })
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso.',
    type: CreateUserResDTO,
  })
  public async createUser(@Body() payload: CreateUserReqDTO): Promise<CreateUserResDTO> {
    return plainToClass(CreateUserResDTO, await this.service.proxyCreateUser(payload), {
      excludeExtraneousValues: true,
    });
  }
}
