'use strict';
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'urlstore'
});

app.use('/static', express.static('static'));

app.use(express.json());

app.listen(port, () => { console.log(`App is listening on Port: ${port}`) })

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './static/index.html')) });

app.get('/api/links', (req, res) => {
  conn.query('SELECT id, url, alias, hitCount FROM urldata;', (err, rows) => {
    console.log(rows)
    if (err) {
      res.status(500).json({ error: 'internal server error' });
      console.log(err);
      return;
    }
    res.json(rows);
  });
});
const codeGen = () => {
  let num = (Math.floor(100000 + Math.random() * 900000)).toString()
  return parseInt(num.substring(0, 4));
}

app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  if (url && alias) {
    conn.query('SELECT * from urldata', (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'internal server error' });
        console.log(err);
        return;
      }
      if (rows.find(element => element.alias == alias)) {
        res.status(400).json({ message: 'alias is already in use' })
      } else {
        conn.query('INSERT INTO urldata (url, alias, secretcode) VALUES (?,?,?);', [url, alias, codeGen()], (err, insrows) => {
          if (err) {
            res.status(500).json({ error: 'internal server error' });
            console.log(err);
            return;
          }
          conn.query(`SELECT * FROM urldata WHERE id = ${insrows.insertId}`, (err, data) => {
            if (err) {
              res.status(500).json({ error: 'internal server error' });
              console.log(err);
              return;
            }
            res.json({
              id: data[0].id,
              url: data[0].url,
              alias: data[0].alias,
              hitCount: data[0].hitCount,
              secretCode: data[0].secretCode
            })
          });
        });
      }
    });
  } else {
    res.json({ error: 'wrong req body' })
  }
});

app.get('/a', (req, res) => {
  const { alias } = req.query;
  console.log(alias);
  if (alias) {
    conn.query('SELECT * FROM urldata;', (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'internal server error' });
        console.log(err);
        return;
      }
      const url = rows.find(element => element.alias === alias);
      console.log(url);
      if (url) {
        conn.query(`UPDATE urldata SET hitCount = hitCount + 1 WHERE id = ${url.id}`, (err) => {
          if (err) {
            res.status(500).json({ error: 'internal server error' });
            console.log(err);
            return;
          }
          res.redirect(`https://${url.url}`)
        });
      } else {
        res.status(404).send('alias is doesnt exist')
      }
    });
  } else {
    res.json({ error: 'wrong query' })
  }
});

app.delete('/api/links/:id', (req, res) => {
  const { id } = req.params;
  const { secretCode } = req.body;
  if (id) {
    conn.query('SELECT * from urldata', (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'internal server error' });
        console.log(err);
        return;
      }
      const alias = rows.find(element => element.id == id);
      console.log(alias)
      if (alias) {
        if (secretCode == alias.secretCode) {
          conn.query(`DELETE FROM urldata WHERE id = ${id}`, (err) => {
            if (err) {
              res.status(500).json({ error: 'internal server error' });
              console.log(err);
              return;
            }
            res.status(210).send(`Deleted from database where id${id} and secretcode ${secretCode}`);
          })
        } else {
          res.status(403).send('the secretcode doesnt match');
        }
      } else {
        res.status(404).send('the id is doesnt exist');
      }
    });
  } else {
    res.json({ error: 'Oooh noooo you send wrong data' });
  }
});