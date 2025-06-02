import { IncomeCategory } from "../enums/income-category.enum";
import { TCreateIncome } from "../types/income.type";
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateIncomeReqDTO implements TCreateIncome{
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsEnum(IncomeCategory)
    @IsNotEmpty()
    category: IncomeCategory;

}