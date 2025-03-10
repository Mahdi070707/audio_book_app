import { Pool } from 'pg';
import { PoolConfig } from 'pg';

const config: PoolConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'audiophile',
  password: 'P0stgr3$',
  port: 5432, // default PostgreSQL port
};

const client = new Pool(config);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const runMigrations = async () => {
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
    await client.query(migrationQuery);
    console.log('Migrations ran successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
  }
};

connectToDatabase().then(runMigrations);