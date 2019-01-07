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

app.listen(port, () => { console.log(`App is listening on Port: ${port}`) })

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './static/index.html')) });

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
    randomNumb = Math.floor(Math.random() * questionsId.length+1);
      // GET A RANDOM A QUESTIONS
    const sqlRandom = `SELECT questions.id, questions.question, answers.id, answers.question_id, answers.is_correct, answers.answer 
                        FROM questions, answers WHERE questions.id = answers.question_id
                        AND questions.id = ${randomNumb};`;
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
  const sql = `DELETE questions, answers FROM questions, answers WHERE questions.id = answers.question_id AND questions.id = ${id};`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json({message: `Successfully deleted the question where id:${id}`});
  });
  
})