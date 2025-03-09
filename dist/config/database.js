import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
// Ensure environment variables are properly typed
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const sequelize = DB_URL
    ? new Sequelize(DB_URL)
    : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD || '', {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
    });
export default sequelize;
