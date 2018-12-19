const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
})

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


/* Setup the server */

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get('/author/', (req, res) => {

  const { category } = req.query
  
  console.log(category)
  conn.query(`select * from booklist where category = '${category}';`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send()
      return
    }
    res.json({ rows })
  })

})





