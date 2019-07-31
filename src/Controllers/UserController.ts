import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../Config/config';
import { User } from './../Models/UserModel';

export class UserController {

    public index = async (_req: Request, res: Response): Promise<void> => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log({rror: err.message || err});
        }
    }

    public store = async (req: Request, res: Response): Promise<void> => {
        console.log(req.method);
    }

    public details = async (req: Request, res: Response): Promise<void> => {
        console.log(req.method);
    }

    public edit = async (req: Request, res: Response): Promise<void> => {
        console.log(req.method);
    }

    public destroy = async (req: Request, res: Response): Promise<void> => {
        console.log(req.method);
    }
}