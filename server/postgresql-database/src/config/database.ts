import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'audiophile',
  user: 'postgres',
  password: 'P0stgr3$',
});

const initializeDatabase = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS your_table_name (
        id SERIAL PRIMARY KEY,
        column1 VARCHAR(255) NOT NULL,
        column2 INT NOT NULL
      );
    `);
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    client.release();
  }
};

initializeDatabase();

export default pool;