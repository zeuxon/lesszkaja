const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// console.log(connection.config.host);

connection.connect();

const app = express()
  .use(cors())
  .use(bodyParser.json());

// Registration endpoint
app.post('/register', (req, res) => {
  const { telefonszam, emailcim, felhasznalonev, jelszo, lakcim, admine } = req.body;

  const query = 'INSERT INTO felhasznalo (telefonszam, emailcim, felhasznalonev, jelszo, lakcim, admine) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [telefonszam, emailcim, felhasznalonev, jelszo, lakcim, admine];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'User registered successfully'});
  });
});

const port = process.env.PORT || 3000; // Change to 3000
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});