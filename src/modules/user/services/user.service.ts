import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { TCreateUser } from '../types/user.type';
import { HttpService } from 'src/shared/http/services/http.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  private readonly userServiceUrl;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.userServiceUrl = this.configService.get<string>('USER_SERVICE_URL');
  }

  public async proxyCreateUser(user: TCreateUser): Promise<IUser> {
    return await this.httpService.proxy<IUser>(`${this.userServiceUrl}/user`, 'POST', {}, user);
  }
}
