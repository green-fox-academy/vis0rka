/* Setup the server */

const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
})

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/static', express.static('static'));

app.get('/', (req, res) => res.sendFile(__dirname + '/static/index.html'));

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})


app.get('/posts/', (req, res) => {
  const findAll = `SELECT * FROM posts`;
  conn.query(findAll, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send()
      return
    }
    res.json({ rows })
  })
});


app.post('/posts/', (req, res) => {
  const { title, url } = req.body;
  if (title === undefined || title === '' || url === undefined || url === '') {
    res.json({
      message: 'All fields are required'
    });
  } else {
    conn.query('INSERT INTO posts (title, url) VALUES (? ,?);', [title, url], (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return
      }
      res.json({
        message: 'Succesfully added',
        title: title,
        url: url
      });
    });
  }
});

app.delete('/posts/', (req, res) => {
  const { id } = req.body;
  const findAll = `SELECT * FROM posts`;
  conn.query(findAll, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' })
      return
    }
    if (rows.find(element => element.id == id)) {
      conn.query(`DELETE FROM posts WHERE id = ${id};`, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'internal server error' })
          return
        }
        res.json({ message: 'Successfully deleted' });
      });

    } else {
      res.json({ message: 'Wrong ID' });
    }
  });
});

app.post('/posts/:id/upvote', (req, res) => {
  const { id } = req.params;
  conn.query('SELECT * FROM posts', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' })
      return
    }
    if (rows.find(element => element.id == id)) {
      conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${id};`, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'internal server error' })
          return
        }
        res.json({ message: `Successfully upvoted the score where id=${id}` });
      });

    } else {
      res.json({ message: 'Wrong ID' });
    }
  });
});

app.post('/posts/:id/downvote', (req, res) => {
  const { id } = req.params;
  conn.query('SELECT * FROM posts', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' })
      return
    }
    if (rows.find(element => element.id == id)) {
      conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${id};`, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'internal server error' })
          return
        }
        res.json({ message: `Successfully downvoted the score where id=${id}` });
      });

    } else {
      res.json({ message: 'Wrong ID' });
    }
  });
});