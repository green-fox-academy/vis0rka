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



app.get('/alldata', (req,res) => {
  const findAll = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price 
  FROM publisher, book_mast, category, author 
  WHERE book_mast.aut_id=author.aut_id 
  AND book_mast.pub_id=publisher.pub_id 
  AND book_mast.cate_id=category.cate_id
  ;`
 
  conn.query(findAll, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send()
      return
    }
    res.json({ rows })
  })
});




app.get('/filter/', (req, res) => {
  const { category, publisher, priceLtn, priceGtn } = req.query

  let filterSql = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price 
  FROM publisher, book_mast, category, author 
  WHERE book_mast.aut_id = author.aut_id 
  AND book_mast.pub_id = publisher.pub_id 
  AND book_mast.cate_id = category.cate_id
  `

  if (category) {
    if (category != 'All') {
      filterSql += ` AND cate_descrip = '${category}'`;
    }
  }
  if (publisher) {
    if (publisher != 'All') {
      filterSql += ` AND publisher.pub_name = '${publisher}'`;
    }
  }
  if (priceLtn) {
    if (priceLtn != '' || priceLtn != undefined ) {
      filterSql += ` AND book_mast.book_price <= ${priceLtn}`;
    }
  }

  if (priceGtn) {
    if (priceGtn != '' || priceGtn != undefined ) {
      filterSql += ` AND book_mast.book_price >= ${priceGtn}`;
    }
  }

  filterSql += `;`;

    conn.query(filterSql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send()
        return
      }
      res.json({ rows })
    })
  });
  





