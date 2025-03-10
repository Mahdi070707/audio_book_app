import { Pool } from 'pg';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

class UserModel {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      // Database connection settings
      host: 'localhost',
      port: 5432,
      database: 'your_database_name',
      user: 'your_username',
      password: 'your_password',
    });
  }

  async create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const { username, email, password } = user;
    const result = await this.pool.query(
      'INSERT INTO users (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
      [username, email, password]
    );
    return result.rows[0];
  }

  async findById(id: number): Promise<User | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows.length ? result.rows[0] : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows.length ? result.rows[0] : null;
  }

  async update(id: number, user: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | null> {
    const { username, email, password } = user;
    const result = await this.pool.query(
      'UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email), password = COALESCE($3, password), updated_at = NOW() WHERE id = $4 RETURNING *',
      [username, email, password, id]
    );
    return result.rows.length ? result.rows[0] : null;
  }

  async delete(id: number): Promise<void> {
    await this.pool.query('DELETE FROM users WHERE id = $1', [id]);
  }
}

export default new UserModel();