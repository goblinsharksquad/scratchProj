// this file will configure and establish a connection pool to the PostgreSQL Database

const { Pool } = require('pg');
require('dotenv').config();

// console.log('Database Configuration:');
// console.log(`User: ${process.env.DB_USER}`);
// console.log(`Host: ${process.env.DB_HOST}`);
// console.log(`Database: ${process.env.DB_NAME}`);
// console.log(`Port: ${process.env.DB_PORT}`);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  },
};
