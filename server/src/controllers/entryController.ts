import { Request, Response ,Router } from 'express';
import { EntryModel } from '../models/Entries';

export const createEntryController = async ( req: Request, res: Response ) => {
    try {
        const newEntry  = new EntryModel(...req.body);
        const savedEntry = await newEntry.save();
        console.info(` New entry saved with id ${savedEntry._id} `);
        res.json({
            message: `Entry with title ${savedEntry.title} saved successfully`
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `An error occured while saving the entry. Please try again.`
        })
    }
}

//FIXME: Restrict this api to update documents only belonging to that user
export const updateEntryController = async ( req: Request, res: Response ) => {
    try {
        let Entry = EntryModel.findById(req.body.id);
        if(!Entry) {
            res.status(404).json({
                message: 'Entry not found. ' +
                        'Cannot Update a non existing entry.'+
                        'Please create a new entry.'
            })
        } else {
            Entry = {
                    ...Entry,
                    ...req.body.updatedDoc
            }
            const savedEntry = Entry.save();
            console.info(`Entry updated with id ${savedEntry._id} `);
            res.json({
                message: `Entry updated with title ${savedEntry.title}`
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `An error occured while updating the entry. Please try again.`
        })
    }
}

//FIXME: Restrict this api to delete documents only belonging to that user
export const deleteEntryController = async ( req: Request, res: Response ) => {
    try {
        const deletedDoc = EntryModel.findByIdAndDelete(req.body.id);
        if(!deletedDoc) {
            res.status(404).json({
                message: 'Entry not found. ' +
                        'Cannot Update a non existing entry.'+
                        'Please create a new entry.'
            })
        } else {
            console.info(`Entry deleted with id ${deletedDoc._id} `);
            res.json({
                message: `Entry deleted with title ${deletedDoc.title}`
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `An error occured while updating the entry. Please try again.`
        })
    }
}