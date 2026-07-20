import { pool } from "./db/dbConnection.js";
async function main() {
    try {
        await pool.query("SELECT 1");
        console.log("Connection established");
        
    } catch (error) {
        console.error('pas pu executer dbConnect', error);
        process.exit(1);
    }
}

main();