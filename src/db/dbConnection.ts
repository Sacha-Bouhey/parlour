import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
if (!DB_HOST ||!DB_USER ||!DB_PASSWORD ||!DB_DATABASE) throw new Error("Missing DB env variables");
const pool = mysql2.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});
export {pool};

