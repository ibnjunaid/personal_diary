import { Request, Response ,Router } from 'express';
import { EntryModel } from '../models/Entries';

export const createEntryController = async ( req: Request, res: Response ) => {
    try {
        const newEntry  = new EntryModel(...req.body);
        const savedEntry = await newEntry.save();
        console.info(` New entry saved with id ${savedEntry._id} `);
        res.json({
            message: `Entry with title ${savedEntry.head} saved successfully`
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `An error occured while saving the entry. Please try again.`
        })
    }
}

//FIXME: Restrict this api to only get the entries of loggedin user
//TODO: Implement a pagination to prevent transfer of huge data
export const getEntryContoller = async ( req:Request, res: Response) => {
    try {
        const Entries = await EntryModel.find({}).lean();
        res.json({
            message: 'Sucessfully fetched entries for user',
            data : Entries ?? []
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Error occured while fetching entries' +
                    'We are looking into it. Please be patient'
        })
    }
}

//FIXME: Restrict this api to update documents only belonging to that user
export const updateEntryController = async ( req: Request, res: Response ) => {
    try {
        let Entry = await EntryModel.findById(req.body.id);
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
            const savedEntry = await Entry.save();
            console.info(`Entry updated with id ${savedEntry._id} `);
            res.json({
                message: `Entry updated with title ${savedEntry.head}`
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
        const deletedDoc = await EntryModel.findByIdAndDelete(req.body.id);
        console.log(deletedDoc);
        if(!deletedDoc) {
            res.status(404).json({
                message: 'Entry not found. ' +
                        'Cannot delete a non existing entry.'
            })
        } else {
            console.info(`Entry deleted with id ${deletedDoc._id} `);
            res.json({
                message: `Entry deleted with title ${deletedDoc.head}`
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `An error occured while updating the entry. Please try again.`
        })
    }
}