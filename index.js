const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const PORT = 3333;

const number = Math.floor(Math.random() * 100);
console.log(number);

app.get('/', (req, res) => {
    if( number >= 50){
        res.redirect('heads')
    } else {
        res.redirect('tails')
    }
});

app.get('/heads', (req,res) => {
    res.render('heads')
});

app.get('/tails', (req,res) => {
    res.render('tails')
});

server.listen(PORT, () => {
    console.log(`running on ${PORT}`)
});