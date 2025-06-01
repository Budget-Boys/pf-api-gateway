import { Router } from "express";
import { getDashboardController } from  '../controllers/frontend.controller'

const router = Router();

router.get('/dashboard/:userId', getDashboardController);

export default router;