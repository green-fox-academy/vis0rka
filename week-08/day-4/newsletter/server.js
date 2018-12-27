const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {console.log(`app is listening on port: ${port}`)});

app.use(express.json());

app.post('/signup', (req,res) => {
  const { username, email } = req.body;
  if (username === undefined || username === '' ||
      email === undefined ||email === '') {
        res.send(`All fields are required`);
      } else {
        res.send(`<h1>Thanks ${username}, we will send updates to ${email} </h1>`);
      }
});