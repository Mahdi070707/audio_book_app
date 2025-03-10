import pool from './config/database.js';

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
    await pool.query(migrationQuery);
    console.log('Migrations ran successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
  } finally {
    pool.end();
  }
};

runMigrations();