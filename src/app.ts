import mongoose from "mongoose";
import bodyParser from 'body-parser';
import { Routes } from './routes/crmRoutes';
import express from 'express';

const mongoUrl = 'mongodb://mongo:27017/api_db';

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config()
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    } 
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(mongoUrl, {
          useNewUrlParser: true
        }, (err) => {
            if (err) {
                console.log(`err mongodb ${err.message}`);
              } else {
                console.log(`MongoDB connected to -> ${mongoUrl}`);
              }
        });
    }
}

export default new App().app;