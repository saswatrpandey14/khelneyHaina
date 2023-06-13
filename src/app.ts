import express, {Express} from 'express';
import { KhelneHaina } from './setupServer';
import databaseConnection from './setupDatabase';

class Application{
    public initialize():void{
        databaseConnection();
        const app: Express = express();
        const server: KhelneHaina = new KhelneHaina(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();
