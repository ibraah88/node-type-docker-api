import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    public async addNewContact (req: Request, res: Response) {
        const contact = await new Contact(req.body).save();
        if(!contact){
            res.send(contact)
        }
        res.json(contact) 
    }

    public async getContacts(req: Request, res: Response) {
        const contact = await Contact.find();
        if(!contact){
            res.send(contact)
        }
        res.json(contact) 
    }

    public async getContactById(req: Request, res: Response) {
        const contact = await Contact.findById(req.params.contactId)
        if(!contact){
            res.send(contact)
        }
        res.json(contact);
    }

    public async updateContact(req: Request, res: Response) {
        const contact = await Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true })
        if(!contact){
            res.send(contact)
        }
        res.json(contact);
    }

    public async deleteContact(req: Request, res: Response) {
        const contact = await Contact.remove({ _id: req.params.contactId })
        if(!contact){
            res.send(contact)
        }
        res.json({ message: 'Successfully deleted contact!'});
    }  
}