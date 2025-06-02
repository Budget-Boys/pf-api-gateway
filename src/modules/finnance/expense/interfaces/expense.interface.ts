import { ExpenseCategory } from "../enums/expense-category.enum";

export interface IExpense{
    id: string,
    amount: number,
    creationDate: Date,
    category: ExpenseCategory,
}