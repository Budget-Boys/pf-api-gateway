import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IUser } from '../interfaces/user.interface';

export class CreateUserResDTO implements Omit<IUser, 'password'> {
  @ApiProperty({ description: 'ID do usuário', example: 'uuid-1234' })
  @Expose()
  id: string;

  @ApiProperty({ description: 'Nome do usuário', example: 'João Silva' })
  @Expose()
  name: string;

  @ApiProperty({ description: 'CPF ou CNPJ do usuário', example: '12345678900' })
  @Expose()
  cpfcnpj: string;

  @ApiProperty({ description: 'Número de telefone', example: '+5511999998888' })
  @Expose()
  phone: string;

  @ApiProperty({ description: 'Endereço de e-mail', example: 'joao@email.com' })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'Data em que o e-mail foi verificado',
    example: '2025-01-01T12:00:00Z',
    nullable: true,
  })
  @Expose({ name: 'email_verified_at' })
  emailVerifiedAt: Date;

  @ApiProperty({
    description: 'Data de criação do usuário',
    example: '2025-01-01T12:00:00Z',
  })
  @Expose({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    description: 'Data da última atualização',
    example: '2025-01-02T15:30:00Z',
  })
  @Expose({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({
    description: 'Data de exclusão do usuário, se aplicável',
    example: null,
    nullable: true,
  })
  @Expose({ name: 'deleted_at' })
  deletedAt: Date;
}
