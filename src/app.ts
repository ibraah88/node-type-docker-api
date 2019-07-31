import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import { UserRoutes } from './Routes/UserRoutes';
import { ContactRoutes } from './Routes/ContactRoutes';
import { connect } from './Config/database';

class App {
    public express: express.Application;

    constructor() {
      this.express = express();
      this.setMiddlewares()
      this.setRoutes()
      this.catchErrors();
      this.setDatabase();
    }

    private setMiddlewares(): void {
      this.express.use(cors());
      this.express.use(morgan('dev'));
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: false }));
      this.express.use(helmet());
    }

    private setRoutes(): void {
      this.express.use('/users', new UserRoutes().router)
      this.express.use('/contacts', new ContactRoutes().router)
    }
    
    private setDatabase() {
      connect();
    }
    
    private catchErrors() {

    }
}

export default new App().express;