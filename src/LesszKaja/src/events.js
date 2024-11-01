const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.post('/felhasznalo', (req, res, next) => {
    db.query(
      'INSERT INTO felhasznalo (felhasznalonev, emailcim, jelszo, telefonszam, lakcim, admine) VALUES (?,?,?,?,?,?)',
      [req.body.username, req.body.email, req.body.psw, req.body.tel, req.body.address, req.body.admin],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/felhasznalo', function (req, res, next) {
    db.query(
      'SELECT id, name, description, date FROM felhasznalo WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/felhasznalo/:id', function (req, res, next) {
    db.query(
      'UPDATE felhasznalo SET name=?, description=?, date=? WHERE id=? AND owner=?',
      [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/felhasznalo/:id', function (req, res, next) {
    db.query(
      'DELETE FROM felhasznalo WHERE id=? AND owner=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;