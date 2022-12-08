var express = require('express');
const UsersRouter = require('./routers/UsersRouter');
const GroupsRouter = require('./routers/GroupsRouter');
const http = require('http');
var app = express();
const port = 3000;
const server = http.createServer(app);
const connect = require('./db/dbConnect');

const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

server.on('error', errorHandler);

app.use('/users',UsersRouter);
app.use('/groups',GroupsRouter);

app.listen(port, () => {

    console.log(`Server started on port ${port}`)
})

