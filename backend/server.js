const http = require('http');
const app = require('./app');

// création du serveur express.js
app.set('port', process.env.PORT || 4000);
const server = http.createServer(app);

server.listen(process.env.PORT || 4000);