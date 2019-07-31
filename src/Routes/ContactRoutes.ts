import { Router } from 'express';
import { ContactController } from '../Controllers/ContactController';

export class ContactRoutes {

    public router: Router;
    public contactController: ContactController = new ContactController();

    constructor() {
        this.router = Router();
        this.routes();
    }
    
    private routes() {
        this.router.get('/', this.contactController.index);
        this.router.post('/', this.contactController.store);
        this.router.get('/:id', this.contactController.details);
        this.router.put('/:id', this.contactController.edit);
        this.router.delete('/:id', this.contactController.destroy);
    }
}