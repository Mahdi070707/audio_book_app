var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Pool } from 'pg';
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'audiophile',
    password: 'P0stgr3$',
    port: 5432, // default PostgreSQL port
};
const client = new Pool(config);
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log('Connected to the database');
    }
    catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
});
const runMigrations = () => __awaiter(void 0, void 0, void 0, function* () {
    const migrationQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    try {
        yield client.query(migrationQuery);
        console.log('Migrations ran successfully');
    }
    catch (error) {
        console.error('Error running migrations:', error);
    }
});
connectToDatabase().then(runMigrations);
