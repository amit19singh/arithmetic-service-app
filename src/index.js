require('dotenv').config()
const express = require('express')
const cors = require('cors');
const { add } = require("./arithmetica")
const app = express();
// const port = 3000;

app.use(cors());


if (!process.env.PORT) {
    throw new Error(`Please specify the port number for the HTTP server with the environment variable PORT.`);
}

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Arithmetic Service. Dated: March 05, 2024');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
    res.json(sum);
})

app.listen(port)

