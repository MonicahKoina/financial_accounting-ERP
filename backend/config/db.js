const mysql = require('mysql2/promise');
require('dotenv').config();

async function testDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });

        const [rows] = await connection.query('SELECT 1 + 1 AS result');
        console.log('DB connected! Result:', rows[0].result);

        await connection.end();
    } catch (err) {
        console.error('DB connection failed:', err.message);
    }
}

testDB();
