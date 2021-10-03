import { Request, Response ,Router } from 'express';
import { EntryModel } from '../models/Entries';

export const createEntryController = async ( req: Request, res: Response ) => {
    try {
        console.log(req.body)
        const newEntry  = new EntryModel( {...req.body} );
        const savedEntry = await newEntry.save();
        console.info(` New entry saved with id ${savedEntry._id} `);
        res.json({
            message: `Entry with title " ${savedEntry.head} " saved successfully`,
            entry: savedEntry
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
        let updatedEntry = await EntryModel.findByIdAndUpdate(req.body.id, req.body.updatedDoc, { new: true });
        console.log(updatedEntry)
        if(updatedEntry === null) {
            res.status(404).json({
                message: 'Entry not found. ' +
                        'Cannot Update a non existing entry.'+
                        'Please create a new entry.'
            })
        } else {
            res.json({
                message: `Entry updated with title : ${updatedEntry.head}`,
                entry: updatedEntry
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
                message: `Entry deleted with title ${deletedDoc.head}`,
                entry: deletedDoc
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `An error occured while updating the entry. Please try again.`
        })
    }
}