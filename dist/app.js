import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import sequelize from './config/database';
dotenv.config();
const app = express();
app.use(express.json()); // For parsing JSON request bodies
app.get('/', async (req, res) => {
    res.send('hello');
});
// Routes
app.use('/api', bookRoutes);
const PORT = Number(process.env.PORT) || 3001;
console.log('PORT:', PORT);
// Sync the database and start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
