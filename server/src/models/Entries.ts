import { model, Schema } from 'mongoose';
import { EntrySchema, StyleSchema } from '../../../commons/interfaces/entrySchema';

const EntryStyle = new Schema<StyleSchema>({
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

const EntrySchema = new Schema<EntrySchema>({
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

export const EntryModel = model('entry', EntrySchema)