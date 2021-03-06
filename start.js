'use strict';
//paul
/************* include library **************/
const http    = require('http');
const express = require('express');
const server  = express();

const serverPort = 4037;


/************* Routing **************/
//웹페이지의 세부 주소를 지정한다.
server.use('/',            require('./server'));
server.use('/api',         require('./api'));

/************* Running server **************/
const httpServer = http.createServer(server);
httpServer.listen(serverPort, () => {
    const startdate = new Date();
    console.log(`[START SERVER (port ${serverPort}) ${startdate}]`);
});
