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
class UserModel {
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
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = user;
            const result = yield this.pool.query('INSERT INTO users (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *', [username, email, password]);
            return result.rows[0];
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows.length ? result.rows[0] : null;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query('SELECT * FROM users WHERE email = $1', [email]);
            return result.rows.length ? result.rows[0] : null;
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = user;
            const result = yield this.pool.query('UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email), password = COALESCE($3, password), updated_at = NOW() WHERE id = $4 RETURNING *', [username, email, password, id]);
            return result.rows.length ? result.rows[0] : null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pool.query('DELETE FROM users WHERE id = $1', [id]);
        });
    }
}
export default new UserModel();
