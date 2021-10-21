import express, {Application} from 'express';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        // Init middlewares
        this.middlewares();
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