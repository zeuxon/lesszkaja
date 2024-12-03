const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
const { exit } = require('process');
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'src/assets/images/restaurantprofiles'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });


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
app.post('/registerrestaurant', upload.single('profilePicture'), (req, res) => {
  const restaurantData = JSON.parse(req.body.restaurantData);
  const { nev, emailcim, jelszo, telefonszam, cim} = restaurantData;

  const query = 'INSERT INTO etterem (nev, emailcim, jelszo, telefonszam, cim) VALUES (?, ?, ?, ?, ?)';
  const values = [nev, emailcim, jelszo, telefonszam, cim];


  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }

   
    const restaurantId = results.insertId;
    const tempFilePath = req.file.path;
    const newFilePath = path.join(__dirname, 'src/assets/images/restaurantprofiles', `${restaurantId}.png`);

    fs.rename(tempFilePath, newFilePath, (err) => {
      if (err) {
        console.error('File rename error:', err);
        return res.status(500).json({ message: 'File rename error', err });
      }

      const querystorage = 'INSERT INTO raktar (osszetevo, mennyiseg, etterem_id) VALUES (?, ?, ?)';
      const valuesstorage = [null, 5000, restaurantId];
      
    
      connection.query(querystorage, valuesstorage, (error, results) => {
        if (error) {
          console.error('Database error:', error);
          return res.status(500).json({ message: 'Database error', error });
        }


      const updateQuery = 'UPDATE etterem SET kep = ? WHERE id = ?';
      const updateValues = [`${restaurantId}.png`, restaurantId];

      connection.query(updateQuery, updateValues, (updateError) => {
        if (updateError) {
          console.error('Database error:', updateError);
          return res.status(500).json({ message: 'Database error', updateError });
        }

        res.status(201).json({ message: 'Restaurant registered successfully' });
      });
    });
    });
  });
});

//login user
app.post('/login', (req, res) => {
  const {emailcim, jelszo} = req.body;

  const query = 'SELECT id, felhasznalonev, emailcim, jelszo, telefonszam, lakcim, admine, felfuggesztve FROM felhasznalo WHERE emailcim=?';
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

  const query = 'SELECT id, nev, emailcim, jelszo, telefonszam, felfuggesztve FROM futar WHERE emailcim=?';
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

  const query = 'SELECT id, nev, emailcim, jelszo, telefonszam, cim, felfuggesztve FROM etterem WHERE emailcim=?';
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

app.post('/modifyuseradmin', (req, res) => {
  const { felhasznalonev, emailcim, telefonszam, lakcim, id} = req.body;

  const query = 'UPDATE felhasznalo SET felhasznalonev=?, emailcim=?, telefonszam=?, lakcim=? WHERE id=?';
  const values = [felhasznalonev, emailcim, telefonszam, lakcim, id];

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

app.post('/modifycourieradmin', (req, res) => {
  const { nev, emailcim, telefonszam, id} = req.body;

  const query = 'UPDATE futar SET nev=?, emailcim=?, telefonszam=? WHERE id=?';
  const values = [nev, emailcim, telefonszam, id];

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

app.post('/modifyrestaurantadmin', (req, res) => {
  const { nev, emailcim, telefonszam, cim, id} = req.body;

  const query = 'UPDATE etterem SET nev=?, emailcim=?, telefonszam=?, cim=? WHERE id=?';
  const values = [nev, emailcim, telefonszam, cim, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'Restaurant modified successfully'});
  });
});

//felhasználó törlések
app.delete('/deleteuser/:id', (req, res) => {
  const {id} = req.params;
  const query = 'DELETE FROM felhasznalo WHERE id=?';
  const values = [id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(200).json({ message: 'User deleted successfully'});
  });
});

app.delete('/deletecourier/:id', (req, res) => {
  const {id} = req.params;
  const query = 'DELETE FROM futar WHERE id=?';
  const values = [id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(200).json({ message: 'User deleted successfully'});
  });
});

app.delete('/deleterestaurant/:id', (req, res) => {
  const {id} = req.params;
  const query = 'DELETE FROM etterem WHERE id=?';
  const values = [id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(200).json({ message: 'User deleted successfully'});
  });
});

//admin felhasználó felfüggesztése

app.post('/suspenduser', (req, res) => {
  const {felfuggesztve, id} = req.body;

  const query = 'UPDATE felhasznalo SET felfuggesztve=? WHERE id=?';
  const values = [felfuggesztve, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'User modified successfully'});
  });
});

app.post('/suspendcourier', (req, res) => {
  const {felfuggesztve, id} = req.body;

  const query = 'UPDATE futar SET felfuggesztve=? WHERE id=?';
  const values = [felfuggesztve, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'User modified successfully'});
  });
});

app.post('/suspendrestaurant', (req, res) => {
  const {felfuggesztve, id} = req.body;

  const query = 'UPDATE etterem SET felfuggesztve=? WHERE id=?';
  const values = [felfuggesztve, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(201).json({ message: 'User modified successfully'});
  });
});

//felhasználók lekérése

app.get('/getusers', (req, res) => {
  const query = 'SELECT id, felhasznalonev, emailcim, telefonszam, lakcim, felfuggesztve FROM felhasznalo WHERE admine = 0';
  connection.query(query, null, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  } );
});

app.get('/getcouriers', (req, res) => {
  const query = 'SELECT id, nev, emailcim, telefonszam, felfuggesztve FROM futar';
  connection.query(query, null, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  } );
});

app.get('/getrestaurants', (req, res) => {
  const query = 'SELECT id, nev, emailcim, telefonszam, cim, felfuggesztve FROM etterem';
  connection.query(query, null, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  });
});

//Étterem függvények
app.get('/restaurants', (req, res) => {
  const query = 'SELECT id, nev, cim, kep FROM etterem';
  connection.query(query, null, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  } );
});

app.get('/restaurants/*', (body, res) => {
  const adatok = {
    etterem_id: body.params[0],
  }

  const values = [adatok.etterem_id]

  const query = 'SELECT termek.id, termek.nev, termek.alapar FROM termek ' +
                'INNER JOIN etterem ON termek.etterem_cim=etterem.cim ' +
                'WHERE etterem.id=?;';
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      return res.status(200).json(results);
    }
  } );
});

app.get('/restaurants-with-foodtypes', (req, res) => {
  const query = `
    SELECT etterem.id AS etterem_id, etterem.nev AS etterem_nev, etterem.kep AS image, eteltipusok.nev AS eteltipus_nev
    FROM etterem
    LEFT JOIN tipuskapcsolat ON etterem.id = tipuskapcsolat.etterem_id
    LEFT JOIN eteltipusok ON tipuskapcsolat.eteltipus_id = eteltipusok.id;
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Adatbázis hiba történt.' });
    }

    // Ellenőrizheted a lekérdezés eredményét, ha szükséges:
    // console.log('Query results:', results);

    const formattedData = {};

    // Az eredményeket úgy formázzuk, hogy az ételtípusok egyetlen listába kerüljenek
    results.forEach(row => {
      if (!formattedData[row.etterem_id]) {
        formattedData[row.etterem_id] = {
          id: row.etterem_id,
          nev: row.etterem_nev,
          image: row.image,
          eteltipusok: [],
        };
      }
      if (row.eteltipus_nev && !formattedData[row.etterem_id].eteltipusok.includes(row.eteltipus_nev)) {
        formattedData[row.etterem_id].eteltipusok.push(row.eteltipus_nev);
      }
    });

    // Az ételtípusok vesszővel elválasztva
    Object.values(formattedData).forEach(item => {
      item.eteltipusok = item.eteltipusok.join(", ");
    });

    // Az adatokat az API válaszként küldjük
    res.status(200).json(Object.values(formattedData));
  });
});




app.post('/restaurantsitem', (req, res) => {
  const adatok = req.body
  const values = [adatok.termek_id, adatok.etterem_id]

  const query = 'SELECT osszetevok.ar, osszetevok.id, osszetevok.nev, termek.id as termek_id, termek.nev as termek_nev FROM osszetevok ' +
                'INNER JOIN termek_osszetevok ON termek_osszetevok.osszetevo_id = osszetevok.id ' +
                'INNER JOIN termek ON termek_osszetevok.termek_id = termek.id ' +
                'INNER JOIN etterem ON termek.etterem_cim=etterem.cim ' +
                'WHERE termek.id=? AND etterem.id=?;';

  //const id_query = 'SELECT termek.id FROM termek WHERE termek.nev=? AND termek.etterem_cim=?;';
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      res.status(200).json(results);
    }
  } );
});

app.post('/getname/', (req, res) => {
  const adatok = req.body;

  values = [adatok.termek_id];

  const query = 'SELECT termek.nev FROM termek WHERE termek.id=?;';

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      res.status(200).json(results);
    }
  } );
});

app.post('/getitem/', (req, res) => {
  const array = req.body.array;

  ids = "";

  for(let index = 0; index < array.length; index++){
    ids += array[index].termek_id.toString() + (index == array.length - 1 ? "" : ",");
  }

  const query = 'SELECT termek.id, termek.nev, etterem.id as etterem_id FROM termek INNER JOIN etterem on termek.etterem_cim=etterem.cim WHERE termek.id IN (' + ids + ')';

  connection.query(query, undefined, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }else{
      res.status(200).json(results);
    }
  } );
});

app.post('/order', (req, res) => {
  adatok = req.body;

  kosar = adatok.adat;
  email = adatok.email;

  adatok = kosar.split("\n");

  let dateobj = new Date();
  dateStr = dateobj.getFullYear() + "-" + (dateobj.getMonth()+1) + "-" + (dateobj.getDay()+1);

  idArray = [];
  feltetArray = [];

  for(let adat of adatok){
    if(adat == "") continue;
    vals = adat.split("$");
    id = vals[0];
    idArray[idArray.length] = "'" + id + "'";
    db = vals[2];
    for (let i = 0; i < db; i++) {
      feltetArray.push(Object.entries(JSON.parse(vals[1])));
    }
  }

  //map = Object.entries(JSON.parse(feltetStr));

  let map = new Map();

  for(let item of feltetArray){
    for(let [key, value] of item){
      if(value == true){
        val = map.get(key);
        map.set(key, val == undefined ? 1 : val+1);
      }
    }
  }

  let tempArr = Array.from(map.keys());
  tempArr.unshift(-1);

  let osszetevoIdStr = tempArr.join(", ");

  cases = "";

  osszetevok = [];

  for(let [key, value] of map){
    cases += "WHEN osszetevok.id = " + key + " THEN " + value + " ";
    osszetevok.push(key);
  }

  idArray.unshift(-1);

  idStr = idArray.join(", ");

  when = '(CASE WHEN osszetevok.id = -1 THEN 1 ' + cases + 'ELSE 1 END)';

  const queryOsszetevok = 'SELECT osszetevok.id, (osszetevok.egyseg * '+when+') as db, raktar_id FROM osszetevok' +
  '  INNER JOIN termek_osszetevok ON osszetevok.id = termek_osszetevok.osszetevo_id' +
  '  WHERE termek_osszetevok.osszetevo_id IN ('+osszetevoIdStr+') OR (termek_osszetevok.termek_id IN ('+idStr+') AND osszetevok.ar = 0)' +
  '  GROUP BY osszetevok.id;'

  connection.query(queryOsszetevok, (error, results) => {
    if (error) {
      console.error('Database error:', error);
    }

    for(let elem of results){
      let itQuery = 'UPDATE raktar SET raktar.mennyiseg = raktar.mennyiseg - ' + elem.db + '  WHERE raktar.id = ' + elem.raktar_id;
      connection.query(itQuery, (error, results) => {
        if (error) console.error('Database error:', error);
      });
    }
    //console.log(results);
  } );

 //értelem vége

 idArray.shift(); //Kiszedjük a placeholder -1 értéket (különben nagy bajok vannak)
 
  parsedId = parseInt(idArray[0].replace("'", ""));
/*
  const modSql = 'INSERT INTO raktar (raktar.id, raktar.osszetevo, raktar.mennyiseg, raktar.etterem_id) '+
                  'SELECT osszetevok.raktar_id, raktar.osszetevo, (raktar.mennyiseg - SUM(osszetevok.egyseg *'+ when +') ) AS db, raktar.etterem_id' +
                  'FROM osszetevok' +
                  'INNER JOIN raktar ON raktar.id = osszetevok.raktar_id' +
                  'WHERE osszetevok.id IN ('+osszetevok.join(", ")+')' +
                  'GROUP BY osszetevok.raktar_id' +
                  'ON DUPLICATE KEY UPDATE raktar.mennyiseg = VALUES(raktar.mennyiseg);';

  const test = 'SELECT osszetevok.id FROM osszetevok WHERE'
  */

  //connection.query(modSql, [], (error, results) => {
  //});

  
  const sql = 'INSERT INTO kosar (datum, osszar, felhasznalo_felhasznalonev, etterem_cim) ' +
              'VALUES (?, (SELECT SUM(alapar) FROM termek WHERE termek.id IN (' + idStr + ')), (SELECT felhasznalonev FROM felhasznalo WHERE emailcim=?), (SELECT etterem_cim FROM termek WHERE id=?) );';

  adatok = [dateStr, email, parsedId];

  connection.query(sql, adatok, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
      res.status(200).json(results);
      //console.log(results);
  } );

  return;
});

app.post('/loadextras', (req,res) => {

  array = req.body.array;

  const sql = 'SELECT osszetevok.id, osszetevok.nev FROM osszetevok WHERE osszetevok.id IN ('+array.join(", ")+')'

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(200).json(results);
  });
});

// Azok a kosarak, amelyeket nem vállaltak el
app.post('/courier/unassigned', (req, res) => {
  const query = 'SELECT kosar.id, kosar.futar_futarid, kosar.datum, kosar.osszar, kosar.etterem_cim, felhasznalo.felhasznalonev, felhasznalo.lakcim ' +
                'FROM kosar ' +
                'INNER JOIN felhasznalo ON kosar.felhasznalo_felhasznalonev = felhasznalo.felhasznalonev ' +
                'WHERE kosar.futar_futarid IS NULL AND kosar.kiszallitva = 0';;
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(200).json(results);
  });
});

// Kosarak, amelyeket egy adott futár vállalt el és még nem szállított ki
app.post('/courier/assigned', (req, res) => {
  const { futarid } = req.body;
  const query = 'SELECT kosar.id, kosar.futar_futarid, kosar.datum, kosar.osszar, kosar.etterem_cim, felhasznalo.felhasznalonev, felhasznalo.lakcim ' +
                'FROM kosar ' +
                'INNER JOIN felhasznalo ON kosar.felhasznalo_felhasznalonev = felhasznalo.felhasznalonev ' +
                'WHERE kosar.futar_futarid = ? AND kosar.kiszallitva = 0';

  connection.query(query, [futarid], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error', error });
    }
    res.status(200).json(results);
  });
});


//A megrendelés elvállalása
app.post('/courier/assign', (req, res) => {
  const { orderId, futarid } = req.body;

  const query = 'UPDATE kosar SET futar_futarid = ? WHERE id = ?';

  connection.query(query, [futarid, orderId], (error, results) => {
    if (error) {
      console.error('Failed to assign order:', error);
      return res.status(500).send({ message: 'Failed to assign order', error });
    }

    if (results.affectedRows === 0) {
      return res.status(404).send({ message: 'Order not found' });
    }

    res.status(200).send({ message: 'Order assigned successfully!' });
  });
});

//A megrendelés megjelölése kiszállítottként
app.post('/courier/completed', (req, res) => {
  const { orderId, futarid } = req.body;

  const query = 'UPDATE kosar SET kiszallitva = 1 WHERE id = ? AND futar_futarid = ?';

  connection.query(query, [orderId, futarid], (error, results) => {
    if (error) {
      console.error('Failed to assign order:', error);
      return res.status(500).send({ message: 'Failed to assign order', error });
    }

    if (results.affectedRows === 0) {
      return res.status(404).send({ message: 'Order not found or courier not assigned to this order' });
    }

    res.status(200).send({ message: 'Order completed successfully!' });
  });
});

//Megrendelések listázása egy étteremhez
app.post('/ordermanagement', (req, res) => {
  const { etteremEmail } = req.body;

  const getRestaurantAddressQuery = 'SELECT cim FROM etterem WHERE emailcim = ?';

  connection.query(getRestaurantAddressQuery, [etteremEmail], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send({ message: 'Database error', error });
    }

    if (results.length === 0) {
      return res.status(404).send({ message: 'Restaurant not found' });
    }

    const restaurantAddress = results[0].cim;

    const getOrdersQuery = 'SELECT * FROM kosar, felhasznalo WHERE etterem_cim = ? AND felhasznalo_felhasznalonev = felhasznalonev';
    connection.query(getOrdersQuery, [restaurantAddress], (error, orderResults) => {
      if (error) {
        console.error('Database error:', error);
        return res.status(500).send({ message: 'Database error', error });
      }

      res.status(200).json(orderResults);
    });
  });
});





//A megrendelés törlése
app.post('/ordermanagement/delete', (req, res) => {
  const { orderId } = req.body;

  const query = 'DELETE FROM kosar WHERE id = ?';
  connection.query(query, [orderId], (error, results) => {
    if (error) {
      console.error('Failed to assign order:', error);
      return res.status(500).send({ message: 'Failed to assign order', error });
    }

    if (results.affectedRows === 0) {
      return res.status(404).send({ message: 'Order not found' });
    }

    res.status(200).send({ message: 'Order deleted successfully!' });
  });
});



/** Storage */

app.get('/storage_get_ingredients', (req, res) => {
  const { etteremEmail } = req.query;
  
  const getRestaurantIdQuery = 'SELECT id FROM etterem WHERE emailcim = ?';
  
  connection.query(getRestaurantIdQuery, [etteremEmail], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send({ message: 'Database error', error });
    }

    if (results.length === 0) {
      return res.status(404).send({ message: 'Restaurant not found' });
    }

    const restaurantId = results[0].id;
    const query = 'SELECT mennyiseg FROM raktar WHERE etterem_id = ?';
  
    connection.query(query, [restaurantId], (err, results) => {
      if (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).send('Server Error');
        return;
      }
      res.send(results);
    });
  });
});

app.get('/storage_get_products', (req, res) => {
  const { etteremEmail } = req.query;
  
  const getRestaurantAddressQuery = 'SELECT cim FROM etterem WHERE emailcim = ?';
  
  connection.query(getRestaurantAddressQuery, [etteremEmail], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send({ message: 'Database error', error });
    }

    if (results.length === 0) {
      return res.status(404).send({ message: 'Restaurant not found' });
    }

    const restaurant_addr = results[0].cim;

    const query = 'SELECT * FROM termek WHERE etterem_cim = ?';
  
    connection.query(query, [restaurant_addr], (err, results) => {
      if (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).json({ message: 'Server Error' });
        return;
      }
      res.status(200).send(results);
    });
  });
});

app.post('/storage_remove_product', (req, res) => {
  const prod_name = req.body.name;
  const query = "DELETE FROM termek WHERE id = ?";
  connection.query(query, [prod_name], (err, result) => {
    if(err) {
      console.error('Error deleting record:', err.message);
      return res.status(500).json({ message: 'Error deleting record.' });
    }
    if (result.affectedRows == 0) {
      console.log("No matching record found to delete.");
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log("Record successfully deleted.");
    res.status(200).send(result);
  })
});

app.post('/storage_add_product', (req, res) => {
  const {value, name, email} = req.body;

  const getRestaurantAddressQuery = 'SELECT cim FROM etterem WHERE emailcim = ?';

  connection.query(getRestaurantAddressQuery, [email], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send({ message: 'Database error', error });
    }

    if (results.length === 0) {
      return res.status(404).send({ message: 'Restaurant not found' });
    }

    const restaurant_addr = results[0].cim;

  const query = 'INSERT INTO termek (alapar, nev, etterem_cim) VALUES (?, ?, ?)'
  connection.query(query, [value, name, restaurant_addr], (err, result) => {
    if(err) {
      console.error('Error adding record:', err.message);
      return res.status(500).json({ message: 'Error adding record.' });
    }
    console.log("Record added successfully with ID:", result.insertId  );
    res.status(200).json({ message: 'Record added succesfully.' });
    })
  })
});

/** End storage */






const port = process.env.PORT || 3000; // Change to 3000
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

app.post('/getuserbyid', (req, res) => {
  const {id} = req.body;

  const query = 'SELECT felhasznalonev, emailcim, telefonszam, lakcim FROM felhasznalo WHERE id=?';
  const values = [id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ status: 'error' });
    }
    res.status(200).json({results});
  });
});



/* Query builder function
function buildQuery(params) {
  let baseQuery = 'SELECT * FROM etterem WHERE ';
  const conditions = [];
  const values = [];

  const fields = ['nev', 'emailcim', 'jelszo', 'telefonszam', 'cim'];

  fields.forEach((field, index) => {
      if (params[index] !== '*') {
          conditions.push(`${field} = ?`);
          values.push(params[index]);
      }
  });

  if (conditions.length === 0) {
      return { query: 'SELECT * FROM etterem', values: [] };
  }

  return {query: baseQuery + conditions.join(' AND '), values};
}
*/
