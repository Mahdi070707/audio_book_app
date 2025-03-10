/**
 * Connects to the PostgreSQL database using Sequelize.
 *
 * This function attempts to authenticate the connection to the PostgreSQL database
 * using the Sequelize instance. If the authentication is successful, it logs a 
 * success message to the console and synchronizes the models with the database.
 * If there is an error during the connection process, it logs the error message 
 * and exits the process with a failure code.
 *
 * @async
 * @function connectDB
 * @throws Will throw an error if the connection to the PostgreSQL database fails.
 */
import { sequelize } from './sequelize.ts';

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected');
        await sequelize.sync();
        } catch (error) {
        console.error('PostgreSQL connection error:', error);
        process.exit(1);
    }
};

export { connectDB };