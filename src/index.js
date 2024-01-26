
const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/add/:n/:m', (req, res) => {
    // res.send('Arithmetic Service - Hello World!');
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.listen(port)

