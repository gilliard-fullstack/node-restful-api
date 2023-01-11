// Library
const http = require('http');
// Module
const app = require('./app.js');
// PORT
const PORT = process.env.PORT || 3000;
// Server
const server = http.createServer(app);
// Listen
server.listen(PORT, () => console.log(`The server is running PORT: ${ PORT }`));