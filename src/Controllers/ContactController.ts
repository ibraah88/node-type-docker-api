import mongoose from 'mongoose';
import { ContactSchema } from '../Models/ContactModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    public index = async (req: Request, res: Response): Promise<void> => {
        try {
            const contact = await Contact.find();
            res.json(contact);
        } catch (err) {
            console.error(err);
            res.json({error: err.message || err});
        }
    }

    public store = async (req: Request, res: Response): Promise<void> => {
        try {
            const contact = await new Contact(req.body).save();
            res.json(contact);
        } catch (err) {
            console.error(err);
            res.json({error: err.message || err});
        }
    }

    public details = async (req: Request, res: Response): Promise<void> => {
        try {
            const contact = await Contact.findById(req.params.id);
            res.json(contact);
        } catch (err) {
            console.error(err);
            res.json({error: err.message || err});
        }
    }

    public edit = async(req: Request, res: Response): Promise<void> => {
        try {
            const contact = await Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.json(contact);
        } catch (err) {
            console.error(err);
            res.json({error: err.message || err});
        }
    }

    public destroy = async (req: Request, res: Response): Promise<void> => {
        try {
            const contact = await Contact.findByIdAndDelete({ _id: req.params.id });
            contact
             ? res.json({message: 'Successfully deleted contact!'}) 
             : res.status(404).json({ message: 'Contact not found'});
        } catch (err) {
            console.error(err);
            res.json({error: err.message || err});
        }
    }  
}