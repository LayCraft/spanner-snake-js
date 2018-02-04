// import http
const http = require('http');
const start = require('./app/start');
var move = require('./app/move');

// set port
const PORT = process.env.PORT || 3001; 


http.createServer((req, res) => {
    if (req.method !== 'POST'){
        console.log("Got a GET request from");
        return res.end("A Battlesnake server is required to get useful responses from Spanner Snake. curtis.laycraft@zoho.com"); // non-game requests
    } 

    let body = []; //collector for long http
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