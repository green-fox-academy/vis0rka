'use strict';
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 8080;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quizapp'
});

app.use('/static', express.static('static'));

app.use(express.json());

app.listen(port, () => { console.log(`App is listening on Port: ${port}`) })

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './static/index.html')) });

app.get('/questions', (req, res) => { res.sendFile(path.join(__dirname, './static/questions.html')) });

app.get('/game', (req,res) => {

  // CREATE A QUERY FROM RANDOM NUMBER ID
  const sql = 'SELECT id, question from questions';
  const questionsId = [];
  let randomNumb = 0;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    rows.forEach(element => {
    questionsId.push(element.id);
    });
    console.log(questionsId)
    randomNumb = Math.floor(Math.random() * questionsId.length);
      // GET A RANDOM A QUESTIONS
    const sqlRandom = `SELECT questions.id, questions.question, answers.id, answers.question_id, answers.is_correct, answers.answer 
                        FROM questions, answers WHERE questions.id = answers.question_id
                        AND questions.id = ${questionsId[randomNumb]};`;
    conn.query(sqlRandom, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      let answersTemp = data.map(element => {
        return {
          id: element.id,
          answer: element.answer,
          is_correct: element.is_correct,
          question_id: element.question_id
        };
      })
      res.json({
        id: data[0].id,
        question: data[0].question,
        answer: answersTemp
      });
      });
  });
}); 

app.get('/allquestions', (req, res) => {
  const sql = 'SELECT * FROM questions;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(rows);
  });
});

app.delete('/questions/:id', (req,res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM questions;';
  const sqlDel = `DELETE questions, answers FROM questions, answers WHERE questions.id = answers.question_id AND questions.id = ${id};`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.find(elements => elements.id == id)) {
      conn.query(sqlDel, (err,data) => {
        if(err) {
          console.log(err.message);
          res.status(500).json({error: 'Internal server error'});
          return;
        } 
        res.json({message: `Successfully deleted the question where id:${id}`});
      });
    } else {
      res.json({message: 'Wrong ID'});
    }
  });
});

app.post('/questions', (req,res) => {
  const { question, answer1, answer2, answer3, answer4, wichtrue } = req.body;
  const sql = `INSERT INTO questions (question) VALUES (?);`;
  conn.query(sql, [question], (err, rows) => {
    if(err) {
      console.log(err.message);
      res.status(500).json({error: 'Internal server error'});
      return;
    } 
    let answerSql;
    switch(wichtrue){
      case '1':
      answerSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,1), (?,?,0), (?,?,0), (?,?,0);`;
      break;
      case '2':
      answerSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,0), (?,?,1), (?,?,0), (?,?,0);`;
      break;
      case '3':
      answerSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,0), (?,?,0), (?,?,1), (?,?,0);`;
      break;
      case '4':
      answerSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,0), (?,?,0), (?,?,0), (?,?,1);`;
      break;
    }
    conn.query(answerSql, [rows.insertId, answer1, rows.insertId, answer2, rows.insertId, answer3, rows.insertId, answer4], (anerr, andata) => {
      if(err) {
        console.log(err.message);
        res.status(500).json({error: 'Internal server error'});
        return;
      } 
      res.status(200).json({message: 'Succesfully added to database'});
    })
  });
})