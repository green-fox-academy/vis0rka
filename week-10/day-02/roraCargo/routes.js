const express = require('express');
const app = express();

app.get('/rocket', (req,res) => {
 res.json({message: 'valami'})
});

module.exports = app;