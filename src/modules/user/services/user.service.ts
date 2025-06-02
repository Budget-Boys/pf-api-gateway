import { IUser } from '../interfaces/user.interface';
import { TCreateUser } from '../types/user.type';

const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:9000';

export class UserService {
  public async proxyCreateUser(user: TCreateUser): Promise<IUser> {
    const response = await fetch(`${userServiceUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar usuário: ${response.statusText}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  }
}
