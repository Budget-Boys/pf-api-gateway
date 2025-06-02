import { IncomeCategory } from '../enums/income-category.enum';

export interface IIncome{
    id:string;
    amount:number;
    category: IncomeCategory,
    creationDate: Date,
}