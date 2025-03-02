const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
console.log('PORT:', process.env.PORT);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
