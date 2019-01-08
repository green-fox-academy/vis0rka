const express = require('express');
const app = express();

app.get('/yondu', (req,res) => {
  const { distance, time} = req.query;
  if(isNaN(distance) && isNaN(time)) {
    res.status(200).json({
      distance: distance,
      time: time,
      speed: distance/time
    });
  } else {
    res.status(210).json({error: 'wrong query'})
  }
});

module.exports = app;