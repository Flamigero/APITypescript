import express, {Application} from 'express';
import cors from 'cors';
import db from '../database/config';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        // Init Database
        this.connectDatabase();

        // Init middlewares
        this.middlewares();
    }

    async connectDatabase() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log(error);
            throw new Error('Error on database connection');
        } 
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Parse body in json
        this.app.use(express.json());

        // Públic content
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in ${this.port}`);
        })
    }
}

export default Server;