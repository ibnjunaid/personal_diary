import { Types } from 'mongoose';

export interface StyleSchema {
    head: string,
    body: string
}

export interface EntrySchema {
    head: string,
    body: string,
    key: Types.ObjectId,
    style: StyleSchema
}
