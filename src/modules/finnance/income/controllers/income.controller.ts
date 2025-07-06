import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IncomeService } from '../services/income.service';
import { CreateIncomeResDTO } from '../dtos/create-income.res.dto';
import { CreateIncomeReqDTO } from '../dtos/create-income.req.dto';

@Controller('incomes')
export class IncomeController {
  constructor(private readonly service: IncomeService) {}

  @Get(':id')
  public async getIncomeById(@Param('id') id: string): Promise<CreateIncomeResDTO> {
    return await this.service.proxyFindIncomeById(id);
  }

  @Post()
  public async createIncome(@Body() payload: CreateIncomeReqDTO): Promise<CreateIncomeResDTO> {
    return await this.service.proxyCreateIncome(payload);
  }

  @Get()
  public async getAllIncomes(): Promise<CreateIncomeResDTO[]> {
    return await this.service.proxyFindAllIncomes();
  }
}
