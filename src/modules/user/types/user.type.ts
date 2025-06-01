import { IUser } from '../interfaces/user.interface';

export type TCreateUser = Pick<
  IUser,
  'name' | 'email' | 'cpfcnpj' | 'phone' | 'password'
>;
