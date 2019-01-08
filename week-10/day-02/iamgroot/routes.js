const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const { message } = req.query;
  if (message) {
    res.status(200).json({
      received: message,
      translated: 'I am Groot!'
    })
  } else {
    res.status(210).json({error: 'I am Groot!'})
  }
});

module.exports = app;