require('dotenv').config()
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})


/* Setup the server */

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


const findAll = `SELECT book_mast.book_name, author.aut_name, publisher.pub_name, category.cate_descrip, book_mast.book_price FROM book_mast
 JOIN author ON book_mast.aut_id = author.aut_id 
 JOIN category ON book_mast.cate_id = category.cate_id
 JOIN publisher ON book_mast.pub_id = publisher.pub_id
 WHERE category.cate_descrip LIKE ? AND publisher.pub_name LIKE ?
 ;`


app.get('/author/', (req, res) => {
  const { category, publisher, priceLtn } = req.query
  let searchValue = [`%`, `%`];

  if (category && publisher) {
    if (category == 'All' && publisher == 'All') {
      searchValue = [`%`, `%`];
    } else if (category == 'All' && publisher) {
      searchValue = [`%`, `%${publisher}`];
    } else if (category && publisher == 'All')
      searchValue = [`%${category}`, `%`];
      else {
      searchValue = [`%${category}`, `%${publisher}`];
    }
  }

    conn.query(findAll, searchValue, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send()
        return
      }
      res.json({ rows })
    })
  });
  /*   if (category == 'All' && publisher) {
      const searchValue = [`%`, `%${publisher}`];
      conn.query(findAll, searchValue, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send()
          return
        }
        res.json({ rows })
      })
    }
  
    if (category  && publisher == 'All') {
      const searchValue = [`%${category}`, `%`];
      conn.query(findAll, searchValue, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send()
          return
        }
        res.json({ rows })
      })
    }
  
    if (category && publisher) {
      const searchValue = [`%${category}`, `%${publisher}`];
      conn.query(findAll, searchValue, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send()
          return
        }
        res.json({ rows })
      })
    }
    if (category == 'All' && publisher == 'All') {
      const searchValue = [`%`, `%`];
      conn.query(findAll, searchValue, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send()
          return
        }
        res.json({ rows })
      })
    }  */






