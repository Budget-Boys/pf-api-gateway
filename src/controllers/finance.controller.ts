import { Request,Response} from 'express';
import { proxyCreateExpenses, proxyCreateIncome, proxyGetExpenses, proxyGetIncomes } from '../services/finance.service';

export const getIncomes = async (req: Request, res: Response) =>{
    try{
        const data = await proxyGetIncomes();
        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({message: error.message || 'Erro ao buscar receitas'})
    }
}

export const createIncome = async (req: Request, res: Response) =>{
    try{
        const data = await proxyCreateIncome(req.body)
        res.status(201).json(data)
    } catch(error: any){
        res.status(500).json({message: error.message || 'Erro ao criar receita'})
    }
}

export const getExpenses = async (req: Request, res: Response) =>{
    try{
        const data = await proxyGetExpenses();
        res.status(200).json(data);
    }catch(error: any){
        res.status(500).json({message: error.message || 'Erro ao buscar despesas'})
    }
}

export const createExpense = async (req: Request, res: Response) =>{
    try{
        const data = await proxyCreateExpenses(req.body);
        res.status(201).json(data)
    }catch (error: any){
        res.status(500).json({message: error.message || 'Erro ao criar despesas'})
    }
}
    