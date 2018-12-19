const express = require('express');
const app = express();
const port = 3000;
const bp = require('body-parser')

app.use(bp());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/array/', (req,res) => {
  const what  = req.body.what;
  if (what && req.body.numbers) {
    if ( what == 'sum') {
      res.json({'result': sum(req.body.numbers)})
    } else if ( what == 'multiply') {
      res.json({'result': multiply(req.body.numbers)})
    } else if ( what == 'double') {
      res.json({'result': double(req.body.numbers)})
    }
  } else res.json({ "error": "Please provide what to do with the numbers!" })
})

const multiply = (array) => {
  return array.reduce( (a,b) => a * b );
}

const sum = (array) => {
  return array.reduce( (a,b) => a + b );
}

const double = (array) => {
  return array.map(x => x*2)
}