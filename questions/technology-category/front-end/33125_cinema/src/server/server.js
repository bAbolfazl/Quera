const movies = require('./movies.json');
const movies_detail = require('./movies-detail.json');

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));

app.get('/movies/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(movies);
});

app.get('/movies/:id/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(movies_detail[req.params.id]);
});

app.listen(9000);
