const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/assets', express.static('assets'));

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));