import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/shared/http/services/http.service';
import { TCreateIncome } from '../types/income.type';
import { IIncome } from '../interfaces/income.interfaces';

const financeServiceURL = process.env.FINANCE_SERVICE_URL || 'http://localhost:9001/api/finance';

@Injectable()
export class IncomeService {
  constructor(private readonly httpService: HttpService) {}

  public async proxyCreateIncome(payload: TCreateIncome): Promise<IIncome> {
    return await this.httpService.proxy<IIncome>(
      `${financeServiceURL}/incomes`,
      'POST',
      {},
      payload,
    );
  }

  public async proxyFindIncomeById(id: string): Promise<IIncome> {
    return await this.httpService.proxy<IIncome>(
      `${financeServiceURL}/incomes/${id}`,
      'GET',
      {},
      undefined,
    );
  }

  public async proxyFindAllIncomes(): Promise<IIncome[]> {
    return await this.httpService.proxy<IIncome[]>(
        `${financeServiceURL}/incomes`, 
        'GET',
         {});
  }
}
