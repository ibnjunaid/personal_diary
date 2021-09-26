import { OAuth2Client } from 'google-auth-library';
import { Request, Response ,Router } from 'express';
const jwt = require('node-jsonwebtoken');
import UserModel from '../models/Users';

console.log(process.env.CLIENT_ID)
const client = new OAuth2Client(process.env.CLIENT_ID);

export const signinController = async (req: Request, res: Response) => {
    try {
        const  { token }  = req.body;
        const obj = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
        console.log(obj);
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
}