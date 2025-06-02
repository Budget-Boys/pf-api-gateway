import { IExpense } from "../interfaces/expense.interface";

export type TCreateExpense = Pick<IExpense, 'amount' | 'category'>