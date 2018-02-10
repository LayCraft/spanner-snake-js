// import http
const http = require('http');
const start = require('./app/start');
const move = require('./app/move');

// set port
const PORT = process.env.PORT || 3001; 
console.log("Running on port "+ PORT);

http.createServer((req, res) => {
    if (req.method !== 'POST'){
        // non-game requests
        console.log("Got a GET request. Wut?");
        return res.end("A Battlesnake server is required to get useful responses from Spanner Snake. curtis.laycraft@zoho.com"); 
    } 

    let body = []; //collector for long http
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString());
        // console.log(req.url+ JSON.stringify(body));
        if (req.url === '/start') message = start(body);
        if (req.url === '/move') message = move(body);
        
        return respond(message);
    });

    function respond(message) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
}).listen(PORT, console.error)