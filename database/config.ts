import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.PGDATABASE || 'postgres', process.env.PGUSER || 'postgres', process.env.PGPASSWORD || 'postgres', {
    host: process.env.PGHOST || 'localhost',
    dialect: 'postgres',
    logging: false
})

export default db;