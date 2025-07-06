import { Module } from '@nestjs/common';
import { ExpenseService } from './services/expense.service';
import { ExpensesController } from './controllers/expense.controller';
import { HttpModule } from '../../../shared/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [ExpensesController],
  providers: [ExpenseService],
  exports: [],
})
export class ExpenseModule {}
