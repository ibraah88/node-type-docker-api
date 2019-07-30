import { Request, Response } from 'express';
import { ContactController } from '../controllers/crmController';

export class Routes {

    public ContactController: ContactController = new ContactController();

    public routes(app: any) : void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll !!!!'
            })
        })

        app.route('/contacts')
        .get(this.ContactController.getContacts)
        .post(this.ContactController.addNewContact)

        app.route('/contacts/:contactId')
        .get(this.ContactController.getContactById)
        .put(this.ContactController.updateContact)
        .delete(this.ContactController.deleteContact)
    }
}
