require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require('mysql2')
const port = 3001;
app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Bizpilot")
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT

})
db.connect((err) => {
    if (err) {
        console.log("Database connection failed", err.stack)
        return;
    } console.log("Connected to mysql")
})