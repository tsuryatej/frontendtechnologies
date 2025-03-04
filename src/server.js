require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

// Remote MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,   // Remote MySQL host
    user: process.env.DB_USER,   // Your database username
    password: process.env.DB_PASSWORD,  // Your database password
    database: process.env.DB_NAME,  // Your database name
    port: process.env.DB_PORT,  // Default MySQL port
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Connected to remote MySQL');
    }
});

// Test API to check connection
app.get('/test-db', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database connection failed', error: err });
        } else {
            res.json({ message: 'Database connected successfully', results });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
