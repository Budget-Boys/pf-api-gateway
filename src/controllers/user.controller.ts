import { Request, Response } from 'express';
import { proxyCreateUser, proxyGetUserById, proxyLoginUser, proxyRegisterUser } from '../services/user.service';


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

export const loginUser = async (req: Request, res: Response) => {
    try{
        const data = await proxyLoginUser(req.params.body);
        res.status(200).json(data)
    }
    catch(error: any){
        res.status(401).json({messasge: error.message || 'Erro ao logar'})
    }
}

export const registerUser = async (req: Request, res: Response) =>{
    try{
        const data = await proxyRegisterUser(req.body);
        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message || 'Erro ao registrar' });
    }
}