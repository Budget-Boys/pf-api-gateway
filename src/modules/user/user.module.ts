import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { HttpModule } from '../../shared/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
