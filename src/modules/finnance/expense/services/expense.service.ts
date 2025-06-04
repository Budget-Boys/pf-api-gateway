import { IExpense } from './../interfaces/expense.interface';
import { Post, Get, Injectable} from "@nestjs/common"
import { HttpService } from "src/shared/http/services/http.service"
import { TCreateExpense } from "../types/expense.types"

const financeServiceURL = process.env.FINANCE_SERVICE_URL || 'http://localhost:9001/api/finance'

@Injectable()
export class ExpenseService {
    constructor(private readonly httpService: HttpService){}
    

    @Post()
    public async proxyCreateExpense(payload: TCreateExpense): Promise<IExpense>{
        return await this.httpService.proxy<IExpense>(
            `${financeServiceURL}/expenses`,
            'POST',
            {},
            payload
        )
    }

    @Get(':id')
    public async proxyFindExpenseById(id: string): Promise<IExpense>{
        return await this.httpService.proxy<IExpense>(
        `${financeServiceURL}/expenses/${id}`,
        'GET',
        {},
        undefined
    )
    }
    
      @Get()
    public async proxyFindAllExpenses(): Promise<IExpense[]>{
        return await this.httpService.proxy<IExpense[]>(
        `${financeServiceURL}/expenses`,
        'GET',
        {},
        undefined
    )
    }

}