import { Request, Response} from 'express';
import {proxyCompleteDashboard} from '../services/frontend.service'

export const getDashboardController = async(req: Request, res: Response) =>{
     try {
        const userId = req.params.userId;
        const dashboardData = await proxyCompleteDashboard(userId);
        res.status(200).json(dashboardData);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}