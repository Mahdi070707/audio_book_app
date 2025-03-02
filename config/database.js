const { Sequelize } = require('sequelize');
require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in your .env file");
}
console.log(process.env.DATABASE_URL);

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;