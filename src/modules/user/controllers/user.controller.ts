import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserReqDTO } from '../dtos/create-user.req.dto';
import { CreateUserResDTO } from '../dtos/create-user.res.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  public async createUser(@Body() payload: CreateUserReqDTO): Promise<CreateUserResDTO> {
    return await this.service.proxyCreateUser(payload);
  }
}
