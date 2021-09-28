import { model, Schema } from 'mongoose';
import { keySchema, userSchema } from '../../../commons/interfaces/userSchema';

const keySchema = new Schema<keySchema>({
    value: {
        type: String,
        required: true
    },
    keyType: {
        type: String,
        enum: [
            "REAL",
            "DUMMY"
        ],
        default: "DUMMY"
    }
}, { timestamps: true });

const UserSchema = new Schema<userSchema>({
    googleId: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    userName: {
        type: String,
        required: true
    },
    displayPicture: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    keys: {
        type: [keySchema],
        //required: true TODO: discuss how the keys will be created
    },
}, { timestamps: true , autoIndex: true});

const UserModel = model<userSchema>('user', UserSchema);

export default UserModel;