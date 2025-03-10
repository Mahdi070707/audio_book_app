var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from './config/database.js';
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const seedQuery = `
    INSERT INTO users (username, email, password, created_at, updated_at) VALUES
    ('testuser1', 'testuser1@example.com', 'hashed_password1', NOW(), NOW()),
    ('testuser2', 'testuser2@example.com', 'hashed_password2', NOW(), NOW()),
    ('testuser3', 'testuser3@example.com', 'hashed_password3', NOW(), NOW())
    ON CONFLICT (username) DO NOTHING;
  `;
    try {
        yield pool.query(seedQuery);
        console.log('Database seeded successfully');
    }
    catch (error) {
        console.error('Error seeding database:', error);
    }
    finally {
        pool.end();
    }
});
seedDatabase();
