const express = require('express');
const app = express();
const port = 8080;
const bp = require('body-parser');

app.use(bp());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    const doubling = {
      "received": input,
      "result": input * 2
    }
    res.json(doubling)
  } else res.json({ "error": "Please provide an input!" });
})

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  if (!name) {
    res.json({ "error": "Please provide a name!" });
  } else if (!title) {
    res.json({ "error": "Please provide a title!" });
  } else {
    res.json({ "welcome_message": `Oh, hi there ${name}, my dear ${title}!` });
  }
})

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  if (appendable) {
    res.json({ "appended": `${appendable}a` });
  } else res.status(404).send();
})

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;
  if (action == 'factor') {
    res.json({ 'result': factorialize(req.body.until) });
  } else if (action == 'sum') {
    res.json({ 'result': countUp(req.body.until) });
  }
})


const countUp = (n) => {
  if (n === 1) {
    return n
  } else {
    return n + (countUp(n - 1));
  }
}


const factorialize = (num) => {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}



