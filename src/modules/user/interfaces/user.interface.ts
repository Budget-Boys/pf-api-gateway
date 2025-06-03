export interface IUser {
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
