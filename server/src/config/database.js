import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

const DB_URL = process.env.DATABASE_URL;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = DB_URL
  ? new Sequelize(DB_URL, { logging: false })
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD || '', {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
