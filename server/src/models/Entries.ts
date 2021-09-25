import { model, Schema } from 'mongoose';

const EntryStyle = new Schema({
    head: {
        color: {
            type: String,
            default: 'white',
        }
    },
    body: {
        color: {
            type: String,
            default: 'black'
        }
    }
});

const EntrySchema = new Schema({
    head: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    key: {
        type: Schema.Types.ObjectId,
        required: true
    },
    style: EntryStyle
});

const EntryModel = model('entry', EntrySchema)

export default EntryModel;