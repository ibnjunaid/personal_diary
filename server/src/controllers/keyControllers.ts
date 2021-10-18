import { Request, Response ,Router } from 'express';
import UserModel from '../models/Users';

export const addKeysController = async (req: Request, res: Response) => {
    try {
        const Keys = req.body.keys;
        const UserId = req.body.userId;
        const User = await UserModel.findById(UserId);
        if(User){
            User.keys = Keys;
            const saved = await User.save()
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export const checkKeysController = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const Key = req.body.key;
        const userId = req.body.userId;
        const User = await UserModel.findOne({ "keys.value": {$in : [ Key ]} , _id: userId });
        if(User){
            res.sendStatus(200);
        } else {
            res.sendStatus(403);
        }
    } catch (error) {
        res.sendStatus(500);
    }
}