import { Request, Response } from 'express';
import { proxyCreateUser, proxyGetUserById } from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
    try{
        const user = await proxyCreateUser(req.body);
        res.status(201).json(user);
    }
    catch(error: any){
        res.status(500).json({message: error.message || 'Erro ao criar usuario'})
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try{ 
        const user = await proxyGetUserById(req.params.id);
        res.status(200).json(user);
    }
    catch(error: any) {
        res.status(500).json({ message: error.message || 'Erro ao buscar usuario'})
    }
}