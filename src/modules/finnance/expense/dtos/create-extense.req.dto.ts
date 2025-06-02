import { ExpenseCategory } from "../enums/expense-category.enum";
import { TCreateExpense } from "../types/expense.types";
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateExpenseReqDTO implements TCreateExpense{
    @IsString()
    @IsNotEmpty()
    amount: number;

    @IsEnum(ExpenseCategory)
    @IsNotEmpty()
    category: ExpenseCategory;

}