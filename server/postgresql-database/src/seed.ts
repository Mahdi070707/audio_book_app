import pool from './config/database.js';

const seedDatabase = async () => {
  const seedQuery = `
    INSERT INTO users (username, email, password, created_at, updated_at) VALUES
    ('testuser1', 'testuser1@example.com', 'hashed_password1', NOW(), NOW()),
    ('testuser2', 'testuser2@example.com', 'hashed_password2', NOW(), NOW()),
    ('testuser3', 'testuser3@example.com', 'hashed_password3', NOW(), NOW())
    ON CONFLICT (username) DO NOTHING;
  `;
  try {
    await pool.query(seedQuery);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    pool.end();
  }
};

seedDatabase();