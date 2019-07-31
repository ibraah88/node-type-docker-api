import { Router } from 'express';
import { UserController } from '../Controllers/UserController';

export class UserRoutes {

    public router: Router;
    public userController: UserController = new UserController();

    constructor() {
        this.router = Router();
        this.routes();
    }
    
    private routes() {
        this.router.get('/', this.userController.index);
        this.router.post('/', this.userController.store);
        this.router.get('/:id', this.userController.details);
        this.router.put('/:id', this.userController.edit);
        this.router.delete('/:id', this.userController.destroy);
    }
}