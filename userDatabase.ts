interface User {
    username: string;
    password: string;
}

class UserDatabase {
    private users: User[] = [];

    addUser(username: string, password: string): void {
        if (this.getUser(username)) {
            throw new Error('User already exists');
        }
        this.users.push({ username, password });
    }

    getUser(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }

    validateUser(username: string, password: string): boolean {
        const user = this.getUser(username);
        return user !== undefined && user.password === password;
    }
}

export default new UserDatabase();
