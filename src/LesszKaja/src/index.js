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
//register user or admin
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
//register courier
app.post('/registercourier', (req, res) => {
  const { nev, emailcim, jelszo, telefonszam } = req.body;

  const query = 'INSERT INTO futar (nev, emailcim, jelszo, telefonszam) VALUES (?, ?, ?, ?)';
  const values = [nev, emailcim, jelszo, telefonszam];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'Courier registered successfully'});
  });
});
//register restaurant
app.post('/registerrestaurant', (req, res) => {
  const { nev, emailcim, jelszo, telefonszam, cim } = req.body;

  const query = 'INSERT INTO etterem (nev, emailcim, jelszo, telefonszam, cim) VALUES (?, ?, ?, ?, ?)';
  const values = [nev, emailcim, jelszo, telefonszam, cim];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'User registered successfully'});
  });
});

//login user
app.post('/login', (req, res) => {
  const {emailcim, jelszo} = req.body;

  const query = 'SELECT id, felhasznalonev, emailcim, jelszo, telefonszam, lakcim, admine FROM felhasznalo WHERE emailcim=?';
  const values = [emailcim, jelszo];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});

//login courier
app.post('/logincourier', (req, res) => {
  const {emailcim, jelszo} = req.body;

  const query = 'SELECT id, nev, emailcim, jelszo, telefonszam FROM futar WHERE emailcim=?';
  const values = [emailcim, jelszo];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});

//login restaurant
app.post('/loginrestaurant', (req, res) => {
  const {emailcim, jelszo} = req.body;

  const query = 'SELECT id, nev, emailcim, jelszo, telefonszam, cim FROM etterem WHERE emailcim=?';
  const values = [emailcim, jelszo];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});

//admin felhasználók lekéréséhez kellő függvények

app.post('/getuseremails', (req, res) => {
  const query = 'SELECT emailcim FROM felhasznalo WHERE admine = 0';

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});

app.post('/getcourieremails', (req, res) => {
  const query = 'SELECT emailcim FROM futar';

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});

app.post('/getrestaurantemails', (req, res) => {
  const query = 'SELECT emailcim FROM etterem';
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});

//profilok módosításához kellő függvények

app.post('/modifyuser', (req, res) => {
  const { felhasznalonev, emailcim, telefonszam, lakcim, jelszo, id} = req.body;

  const query = 'UPDATE felhasznalo SET felhasznalonev=?, emailcim=?, telefonszam=?, lakcim=?, jelszo=? WHERE id=?';
  const values = [felhasznalonev, emailcim, telefonszam, lakcim, jelszo, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'User modified successfully'});
  });
});

app.post('/modifycourier', (req, res) => {
  const { nev, emailcim, telefonszam, jelszo, id} = req.body;

  const query = 'UPDATE futar SET nev=?, emailcim=?, telefonszam=?, jelszo=? WHERE id=?';
  const values = [nev, emailcim, telefonszam, jelszo, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'Courier modified successfully'});
  });
});

app.post('/modifyrestaurant', (req, res) => {
  const { nev, emailcim, telefonszam, cim, jelszo, id} = req.body;

  const query = 'UPDATE etterem SET nev=?, emailcim=?, telefonszam=?, cim=?, jelszo=? WHERE id=?';
  const values = [nev, emailcim, telefonszam, cim, jelszo, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'Restaurant modified successfully'});
  });
});

//Étterem függvények
app.get('/restaurants', (req, res) => {
  const query = 'SELECT id, nev, cim FROM etterem';
  connection.query(query, null, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  } );
});

app.get('/restaurants/*/*', (body, res) => {
  const adatok = {
    cim: body.params[1],
    nev: body.params[0],
  }

  const values = [adatok.cim, adatok.nev]

  const query = 'SELECT * FROM termek WHERE etterem_cim=?';
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  } );
});

//Raktárak listázása
app.get('/storage/:address', (req, res) => {
  const address = req.query.address; // Retrieve address from query parameter

  if (!address) {
    return res.status(400).json({ message: "Address is required" });
  }

  const query = `
    SELECT r.osszetevok_nev, r.mennyiseg, r.raktarid, r.etterem_cim, r.alaposszetevok_nev
    FROM raktar r
    WHERE r.etterem_cim = ?`;

  connection.query(query, [address], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    res.json(results);
  });
});



const port = process.env.PORT || 3000; // Change to 3000
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
