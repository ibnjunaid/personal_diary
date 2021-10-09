import axios from 'axios';
import { Request, Response, Router } from 'express';
import jsonwebtoken from 'jsonwebtoken';

import UserModel from '../models/Users';

const Secret = 'mysupersecret-key';

export const signinController = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;

        //Validate if the token by calling the google Oauth Api
        const userInfo = await validateUserInfo(token);

        //Check if any user exist with this googleId
        const user = await UserModel.findOne({ googleId: userInfo.id });

        if (user == null) {
            //If the user  doesn't exist create a new One
            const newUser = new UserModel({
                googleId: userInfo.id,
                userName: userInfo.given_name,
                email: userInfo.email,
                displayPicture: userInfo.picture
            })

            //Save the user to database
            const savedUser = await newUser.save();

            console.info(`New user ${savedUser.userName} created.`);

            //extract details
            const { displayPicture, userName, email} = savedUser;
            // generate a jsonwebtoken
            const token = jsonwebtoken.sign(JSON.stringify( { displayPicture, userName, email } ), Secret);

            // Check whether secrets is configured
            const isSecretsConfigured = savedUser.keys.length > 0;

            // Send details to the caller
            res.json({
                status: true,
                isNew: true,
                token: token,
                user: { displayPicture, userName, email },
                isSecretsConfigured: isSecretsConfigured,
                message: "New User created sucessfully",
            })
        }
        else {

            const { displayPicture, userName, email } = user;

            // Check whether secrets is configured

            const isSecretsConfigured = user.keys.length > 0;

            //generate a jsonwebtoken
            const token = jsonwebtoken.sign(JSON.stringify({ displayPicture, userName, email }), Secret);

            // Send details to the caller
            res.json({
                status: true,
                isNew: false,
                token: token,
                user: { displayPicture, userName, email },
                isSecretsConfigured: isSecretsConfigured, //DONE: Check if secrets is configured
                message: "User already exist", //DONE: Generate a token for the user, and send it to the frontend
            })
        }
    } catch (error: any) {
        console.log(error);
    }
}

async function validateUserInfo(token: any) {
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
        // console.log(googleUser);
        return googleUser;
    } catch (error) {
        // console.error(error)
    }
}