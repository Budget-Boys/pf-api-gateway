import { IUser } from '../interfaces/user.interface';

export class CreateUserResDTO implements IUser {
  id: string;
  name: string;
  cpfcnpj: string;
  phone: string;
  email: string;
  emailVerifiedAt: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
