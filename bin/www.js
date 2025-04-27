const http = require('http');
const serverHandle = require('../app')
const port = 8000;

const server = http.createServer(serverHandle)

server.listen(port,() => {
    console.log(`Listening to ${port}...`);
})