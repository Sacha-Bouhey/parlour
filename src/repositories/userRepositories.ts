import { pool } from "../db/dbConnection.js";
import type { ResultSetHeader } from "mysql2";

export async function createUser(username: string, email: string, passwordHash: string): Promise<number> {

    const [result] = await pool.execute<ResultSetHeader>(
        `INSERT INTO users (username, email, password_hash)
        VALUES (?, ?, ?)`,
        [username, email, passwordHash]
    );

    return result.insertId;
}

export async function findUser(username: string) {
    const [userResult] = await pool.execute("SELECT * FROM users WHERE username = ?", [username]);
    return userResult;
}