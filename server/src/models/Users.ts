import { model, Schema } from 'mongoose';

const keySchema = new Schema({
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

const UserSchema = new Schema({
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

const UserModel = model('user', UserSchema);

export default UserModel;