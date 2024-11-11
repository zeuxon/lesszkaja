const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
const { exit } = require('process');
const crypto = require('crypto');
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
  const query = 'SELECT id, nev, cim FROM etterem';
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

app.post('/restaurantsitem', (req, res) => {
  const adatok = req.body
  const values = [adatok.termek_id, adatok.etterem_id]

  const query = 'SELECT osszetevok.id, osszetevok.nev, termek.id as termek_id, termek.nev as termek_nev FROM osszetevok ' +
                'INNER JOIN termek_osszetevok ON termek_osszetevok.osszetevo_id = osszetevok.id ' +
                'INNER JOIN termek ON termek_osszetevok.termek_id = termek.id ' +
                'INNER JOIN etterem ON termek.etterem_cim=etterem.cim ' +
                'WHERE termek.id=? AND etterem.id=? AND osszetevok.ar>0;';

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

  // First, retrieve the restaurant address from the database using the email
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

    // Now use the restaurant address to fetch the orders related to this restaurant
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


app.get('/storage_get_ingredients', (req, res) => {
  const query = 'SELECT * FROM raktar';

  connection.query(query, (err, results) => {
    if(err) {
      console.error('Error fetching data:', err.message);
      res.status(500).send('Server Error');
      return;
    }
    res.send(results);
  });
});

app.get('/storage_get_products', (req, res) => {
  const restaurant_addr = req.query.addr;
  const query = 'SELECT * FROM termek WHERE etterem_cim = ?';

  connection.query(query, [restaurant_addr], (err, results) => {
    if(err) {
      console.error('Error fetching data:', err.message);
      res.status(500).json({ message: 'Server Error'});
      return;
    }
    res.status(200).send(results);
  });
});


app.post('/remove_product', (req, res) => {
  const prod_name = req.body.name;
  const query = "DELETE FROM termek WHERE nev = ?";
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


app.post('/add_product', (req, res) => {
  const {value, name, addr} = req.body;
  const query = 'INSERT INTO termek (alapar, nev, etterem_cim) VALUES (?, ?, ?)'
  connection.query(query, [value, name, addr], (err, result) => {
    if(err) {
      console.error('Error adding record:', err.message);
      return res.status(500).json({ message: 'Error adding record.' });
    }
    console.log("Record added successfully.", result  );
    res.status(200).json({ message: 'Record added succesfully.' });
  })
});










//var DEBUG = true;
var DEBUG = false;
/****** Etterem funkciok ******/

// termek hozzaadasa a termek tablahoz
function add_product_to_termek(add_product) {
  const query = 'INSERT INTO termek (alapar, nev, etterem_cim) VALUES (?, ?, ?)';
  connection.query(query, add_product, (err, results) => {
      if(err) {
          console.error('Error executing query:', err);
          return;
      }
      console.log('Record inserted with ID:', results);
      console.log();
  })
}

if (DEBUG)
  add_product_to_termek([ 1200, "Disznósajt", 'Budapest, József körút 87.' ]);


// termek torlese a termek tablabol
function delete_product_from_termek(id) {
    const query = 'DELETE FROM termek WHERE nev = ?';
    connection.query(query, [id], (err, res) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Deleted record:', res);
        console.log();
    })
}

if (DEBUG)
  delete_product_from_termek("Disznósajt");


// termek aranak valtoztatasa a termek tablaban
function change_price(id, value) {
    const query = 'UPDATE termek SET alapar = ? WHERE nev = ?';
    connection.query(query, [value, id], (err, res) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log("Update successfull:", res);
        console.log();
    })
}

if (DEBUG)
  change_price("Cheese Burger",  999);


// termek rekord megszerzese a termek tablabol
function get_product(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM termek WHERE nev = ?';
        connection.query(query, [id], (err, res) => {
            if (err) {
                console.error('Error executing query.');
                reject(err);
                return;
            }
            console.log('Succesfully retrived record.');
            resolve(res);
        })
    })
}

if (DEBUG)
  get_product('Cheese Burger')
      .then(res => console.log("Query record:", res))
      .catch(err => console.log("Query error:", err));


/*******Admin funkciok ********/

// etterem hozzaadasa az etterem tablahoz
function add_restaurant(values) {
  const query = 'INSERT INTO etterem (nev, emailcim, jelszo, telefonszam, cim) VALUES (?, ?, ?, ?, ?)';
  values[2] = crypto.createHash('sha256').update(values[2]).digest('hex');
  connection.query(query, values, (err, results) => {
      if(err) {
          console.error('Error executing query:', err);
          return;
      }
      console.log();
      console.log('Record inserted with ID:', results.insertId);
  })
}

if (DEBUG)
  add_restaurant(['Jako Cukraszda', 'info@jakocukraszda.com', 'jako1234', '0630000000', 'Kecskeméti Jakó Cukrászda 1.']);


// etterem torlese az etterem tablabol
function delete_restaurant(id) {
  const query = 'DELETE FROM etterem WHERE nev = ?';
  connection.query(query, [id], (err, res) => {
      if (err) {
          console.error('Error executing query:', err);
          return;
      }
      console.log();
      console.log('Deleted record:', res.affectedRows);
  })
}

if (DEBUG)
  delete_restaurant('Jako Cukraszda');


// etterem lekerdezese az etterem tablabol
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

function get_restaurants(params) {
  return new Promise((resolve, reject) => {
      const { query, values } = buildQuery(params);
      connection.query(query, values, (err, res) => {
          if (err) {
              console.error("Error executing query.");
              reject(err);
              return;
          }
          console.log("Successfully retrieved records.");
          resolve(res);
      });
  });
}

if (DEBUG)
  get_restaurants(['*', '*', '*', '*', '*'])
    .then(result => console.log("Query records:", result))
    .catch(err => console.error("Query failed:", err));




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
