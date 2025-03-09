import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Ensure environment variables are properly typed
const DB_URL = process.env.DB_URL as string | undefined;
const DB_NAME = process.env.DB_NAME as string;
const DB_USER = process.env.DB_USER as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string | undefined;

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
