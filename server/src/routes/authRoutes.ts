import { Request, Response ,Router } from 'express';
import UserModel from '../models/Users';

const router = Router();

router.post('/signin', async (req: Request, res: Response) => {
    try {
        const googleId = req.body.token.profileObj.googleId;
        const user = await UserModel.findOne( { googleId } );
        if( user == null ) {
            const newUser = new UserModel({
                googleId,
                userName: req.body.token.profileObj.givenName,
                email: req.body.token.profileObj.email,
                displayPicture: req.body.token.profileObj.givenName
            })
            const savedUser = await newUser.save();
            console.log(savedUser._id);
            res.json({
                status: true,
                message: "New User created sucessfully", //TODO: Generate a token for the user
            })
        } else {
            res.json({
                status: true,
                message: "User already exist", //TODO: Generate a token for the user, and send it to the frontend
            })
        }
    } catch (error: any) {
        console.log(error);
    }
})

export default router;