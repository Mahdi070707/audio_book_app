import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from './config/database.js';
import bookRoutes from './routes/bookRoutes.js';


dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3001;
// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
// Simple test route
app.use('/api', bookRoutes);
// Import your routes here (if you have them)
// import bookRoutes from "./routes/bookRoutes";
// app.use("/api/books", bookRoutes);
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
});
export default app;

