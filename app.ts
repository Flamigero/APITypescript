import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

// Initialize server
const server = new Server();
server.listen();