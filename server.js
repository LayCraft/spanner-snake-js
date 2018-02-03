// import http
const http = require('http');
const start = require('./app/start');
var move = require('./app/move');

// set port
const PORT = process.env.PORT || 3000; 


http.createServer((req, res) => {
    if (req.method !== 'POST') return respond(); // non-game requests

    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString());
        if (req.url === '/start') message = start(body);
        if (req.url === '/move') message = move(body);
        return respond(message);
    });

    function respond(message) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
}).listen(PORT, console.error)