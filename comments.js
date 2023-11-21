// Create web server application
// Create a web server application that can listen to client requests and send a response back to the client.

// 1. Import the http module
const http = require('http');

// 2. Create the server object
const server = http.createServer((req, res) => {
    // 3. Send back a response and end the connection
    res.end('Hello world from node js');
});

// 4. Listen on port 3000
server.listen(3000);