import express from 'express';
import { createExpense, createIncome, getExpenses, getIncomes } from '../controllers/finance.controller';

const router = express.Router();

router.get('/incomes', getIncomes)
router.post('/incomes', createIncome)
router.get('/expenses', getExpenses)
router.post('/expenses', createExpense)

export default router;