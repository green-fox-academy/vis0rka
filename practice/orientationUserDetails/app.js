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
  database: 'userdata'
});

app.use('/static', express.static('static'));

app.use('/details/static', express.static('static'));

app.use('/register/static', express.static('static'));

app.use(express.json());

app.listen(port, () => { console.log(`App is listening on Port: ${port}`) })

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './static/index.html')) });

app.get('/details/:id', (req, res) => { res.sendFile(path.join(__dirname, './static/details.html')) });

app.get('/register', (req, res) => { res.sendFile(path.join(__dirname, './static/register.html')) });

app.post('/login', (req,res) => {
  const { username, password } = req.body;
    if(username && password) {
      conn.query('SELECT * FROM userdetails', (err,rows) => {
        if(err) {
          res.status(500).json({message: 'internal server error'});
          console.log(err);
          return;
        }
        const user = rows.find(element => element.name === username);
        if(user){
          if(user.password === password) {
            res.json({
              message: 'User access',
              pathTo: '/details',
              id: user.id
            })
          } else {
            res.json({message: 'Wrong password'})
          }
        } else {
          res.json({
            message: 'No user in database',
            pathTo: '/register'
          });
        }
      });
    }
});

app.get('/user/details/:id', (req,res) => {
  const { id } = req.params;
  if (id) {
    conn.query(`SELECT * FROM userdetails WHERE ID = '${id}';`, (err,rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      } 
      res.json(rows);
    })
  } else {
    res.json({ message: 'please send ID'})
  }
});

app.get('/companies', (req,res) => {
  conn.query('SELECT company FROM userdetails;', (err,rows) => {
    if(err) {
      res.status(500).json({error: 'internal server error'});
      console.log(err);
      return;
    }
    res.json(rows)
  })
});


app.post('/register', (req,res) => {
  const { username, password, company, gender, birthplace, birthdate } = req.body;
  const sql = `INSERT INTO userdetails (name, password, company, gender, birthplace, birthday) 
  values (?,?,?,?,?,?);`
  conn.query(sql, [username, password, company, gender, birthplace, birthdate], (err,rows) => {
    if(err) {
      res.status(500).json({error: 'internal server error'});
      console.log(err);
      return;
    }
    res.json({
      message: 'Insterted into database',
      id:rows.insertId,
      username: username,
      password: password,
      company: company,
      gender: gender,
      birthplace: birthplace,
      birthdate: birthdate
    })
  })
});

app.patch('/update', (req,res) => {
  const { id, username, password, company, gender, birthplace, birthdate } = req.body;
  const sql = `UPDATE userdetails SET name = ?, password = ?, company = ?, gender = ?, birthplace = ?, birthday = ? WHERE id = ${id};`
  conn.query(sql, [username, password, company, gender, birthplace, birthdate], (err,rows) => {
    if(err) {
      res.status(500).json({error: 'internal server error'});
      console.log(err);
      return;
    }
    res.json([{
      message: 'Updated into database',
      id:id,
      username: username,
      password: password,
      company: company,
      gender: gender,
      birthplace: birthplace,
      birthday: birthdate
    }])
  })
});