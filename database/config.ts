import { Sequelize } from 'sequelize';

const db = new Sequelize(process.env.PGDATABASE || 'postgres', process.env.PGUSER || 'postgres', process.env.PGPASSWORD || 'postgres', {
    host: process.env.PGHOST || 'localhost',
    dialect: 'postgres'
})

export default db;