import express, {Application} from 'express';
import cors from 'cors';
import db from '../database/config';
import cityRouter from '../routes/city';

class Server {
    public app: Application;
    private port: string;
    private apiPaths = {
        city: '/api/city',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        // Init Database
        this.connectDatabase();

        // Init middlewares
        this.middlewares();

        // Init routes
        this.routes();
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

    // API Routes
    routes() {
        this.app.use(this.apiPaths.city, cityRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in ${this.port}`);
        })
    }
}

export default Server;