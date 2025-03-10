var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'audiophile',
    user: 'postgres',
    password: 'P0stgr3$',
});
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        yield client.query(`
      CREATE TABLE IF NOT EXISTS your_table_name (
        id SERIAL PRIMARY KEY,
        column1 VARCHAR(255) NOT NULL,
        column2 INT NOT NULL
      );
    `);
        console.log('Database initialized');
    }
    catch (error) {
        console.error('Error initializing database:', error);
    }
    finally {
        client.release();
    }
});
initializeDatabase();
export default pool;
