const http = require('http'); // Imports the Node.js http module

const hostname = '127.0.0.1'; // The local machine's IP address
const port = 3000; // The port the server will listen on

// Creates the server and handles requests and responses
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Sets the HTTP status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Sets the response header
  res.end('Hello, World!\n'); // Sends the response body and ends the connection
});

// Starts the server listening for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // Logs a message to the console when the server starts
});
