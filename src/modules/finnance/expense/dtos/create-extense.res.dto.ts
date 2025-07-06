import { ExpenseCategory } from "../enums/expense-category.enum";
import { IExpense } from "../interfaces/expense.interface";

export class CreateExpenseResDTO implements IExpense {
    id: string;
    amount: number;
    creationDate: Date;
    category: ExpenseCategory;

}