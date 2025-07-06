import { IncomeCategory } from "../enums/income-category.enum";
import { IIncome } from "../interfaces/income.interfaces";

export class CreateIncomeResDTO implements IIncome {
    id: string;
    amount: number;
    category: IncomeCategory;
    creationDate: Date;

}