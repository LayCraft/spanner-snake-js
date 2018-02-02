const bodyParser = require('body-parser');
const start = require('./app/start');
var move = require('./app/move');

// import http
const http = require('http');

// set port and port message
var port = 3000;
//pull port from run command
if (process.argv.length==3) port = valueOf(process.argv[2]);

// create handler
const requestHandler = (req, res) => {
    //Check to be sure all requests are post only.
    if (req.method !== 'POST') return res.end("Nice try. You can only have post requests.");

    console.log("Requested URL:" + req.url);
    if (req.url=='/start') {
        console.log('POST for starter snake info.');

        // collect starter information for the body of the response message
        var body = start("Starter information");
        //json encode and send back to user
        res.end(JSON.stringify(body));

    } else if (req.url=='/move'){
        console.log('Post for movement info.');
        
        // collect a move for the body of the response message
        var body = move("Movement information");
        res.end(JSON.stringify(body));

    } else if (req.url=='/head.jpg'){
        console.log('send head');
        res.end('Send head.');
    } else
    {
        console.log('Error: '+ req.log);
        res.end('This is a big problem You were doing something weird.');
    }
}

// start server
const server = http.createServer(requestHandler);

// Set server to port
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`);
});
// const http = require('http')

// function start(game) {
//   return {
//     name: 'Snek',
//     color: '#bb2233',
//   }
// }

// function move(data) {
//   return {
//     move: "up",
//     taunt: "Boop the snoot!",
//   }
// }

/**
 * HTTP Server
 * Boilerplate server to receive and respond to POST requests
 * other requests will be returned immediately with no data
 */
// http.createServer((req, res) => {
//     if (req.method !== 'POST') return respond(); // non-game requests

//     let body = [];
//     req.on('data', chunk => body.push(chunk));
//     req.on('end', () => {
//         body = JSON.parse(Buffer.concat(body).toString());
//         if (req.url === '/start') message = start(body);
//         if (req.url === '/move') message = move(body);
//         return respond(message);
//     });

//     function respond(message) {
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(message));
//     }
// }).listen(process.env.PORT || 80, console.error)