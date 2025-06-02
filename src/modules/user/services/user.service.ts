import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { TCreateUser } from '../types/user.type';
import { HttpService } from 'src/shared/http/services/http.service';

const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:9000';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  public async proxyCreateUser(user: TCreateUser): Promise<IUser> {
    return await this.httpService.proxy<IUser>(`${userServiceUrl}/user`, 'POST', {}, user);
  }
}
