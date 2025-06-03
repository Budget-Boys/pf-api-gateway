import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { TCreateUser } from '../types/user.type';

export class CreateUserReqDTO implements TCreateUser {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Endereço de e-mail do usuário',
    example: 'joao@email.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'CPF ou CNPJ do usuário (apenas números)',
    example: '12345678900',
  })
  @IsNumberString()
  @IsNotEmpty()
  cpfcnpj: string;

  @ApiProperty({
    description: 'Número de telefone no formato BR',
    example: '+5511999998888',
  })
  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha1234',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
