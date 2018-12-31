const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'trialExam'
})


app.use('/static', express.static('static'));

app.use(express.json());

app.listen(port, () => { console.log(`app is listening on port ${port}`) });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
})

app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  let secretcode = randomCode();

  if (alias === undefined || alias === '' || url === undefined || url === '') { // <- ez kell-e ha a html form-ot required-re állítom?
    res.json({
      message: 'All fields are required'
    });
  }

  const sql = `SELECT * FROM urlStore;`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.find(element => element.alias == alias)) {
      res.status(400).json({ message: 'Your alias is already in use!' });
    } else {            // Ezt az alsó két query össze lehet vonni?
      conn.query('INSERT INTO urlStore (url, alias, secretcode) VALUES (? ,?, ?);', [url, alias, secretcode], (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return
        }
        conn.query(`SELECT * FROM urlStore WHERE alias = '${alias}';`, (err, info) => {
           res.json({ 
            id: info[0].id, // <- itt ezeket a [0] hívásokat valahogy ki lehet kerülni?
            url: info[0].url,
            alias: info[0].alias,
            hitCount: info[0].hitCount,
            secretCode: info[0].secretCode
           });
        })
      });
    }
  })
})

const randomCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

app.get('/a', (req,res) => {
  const { alias } = req.query

  conn.query(`SELECT * FROM urlStore;`, (err,rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({message: 'Internal server error'});
      return
    }
    if (rows.find(element => element.alias = alias)) {
      conn.query(`UPDATE urlStore SET hitCount = hitCount + 1 WHERE alias = '${alias}';`, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({message: 'Internal server error'});
          return
        }
        res.json({message: `The alias:${alias} hitcount increment by 1`})
      })
    } else {
      res.status(404).send()
    }
  })

}) 