
import { ExpenseService } from "../services/expense.service";
import { CreateExpenseResDTO } from "../dtos/create-extense.res.dto";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { IExpense } from "../interfaces/expense.interface";
import { CreateExpenseReqDTO } from "../dtos/create-extense.req.dto";

@Controller('expenses')
export class ExpensesController{
    constructor(private readonly service: ExpenseService){}

    @Get(':id')
    public async getExpenseById(@Param('id') id:string) : Promise<CreateExpenseResDTO>{
        return await this.service.proxyFindExpenseById(id)
    }

    @Post()
    public async createExpense(@Body() payload: CreateExpenseReqDTO): Promise<CreateExpenseReqDTO>{
        return await this.service.proxyCreateExpense(payload)
    }

    @Get()
      public async getAllExpenses(): Promise<CreateExpenseResDTO[]> {
        return await this.service.proxyFindAllExpenses();
      }
}