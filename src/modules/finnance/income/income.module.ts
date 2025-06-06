import { Module } from '@nestjs/common';
import { IncomeService } from './services/income.service';
import { IncomeController } from './controllers/income.controller';
import { HttpModule } from '../../../shared/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [IncomeController],
  providers: [IncomeService],
  exports: [],
})
export class IncomeModule {}
