/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, Max } from 'class-validator';
import { TCreateUser } from '../types/user.type';

export class CreateUserReqDTO implements TCreateUser {
  @IsString()
  @Max(25)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  cpfcnpj: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
