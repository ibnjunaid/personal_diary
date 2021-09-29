import axios from 'axios';
import { Request, Response, Router } from 'express';
const jwt = require('node-jsonwebtoken');

import UserModel from '../models/Users';

export const signinController = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const userInfo = await getUserInfo(token);
        const googleId = userInfo.id;
        const user = await UserModel.findOne({ googleId });
        if (user == null) {
            const newUser = new UserModel({
                googleId,
                userName: userInfo.givenName,
                email: userInfo.email,
                displayPicture: userInfo.givenName
            })

            const savedUser = await newUser.save();
            console.info(`New user ${savedUser.userName} created.`);

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

async function getUserInfo(token: any) {
    try {
        const response = await axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token.accessToken}`,
                {
                    headers: {
                        Authorization: `Bearer ${token.tokenId}`,
                    },
                },
            );
        const googleUser = await response.data;
        console.log(googleUser);
        return googleUser;
    } catch (error) {
        // console.error(error)
    }
}