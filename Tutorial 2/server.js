//Require a HTTP Module
const http = require('http');

// Create a server
const server = http.createServer((request, response)=>{
    console.log('request made')
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for request on port 3000')
})

/*
Local host is like domain names but takes us to a loop back ip adress 127.0.0.1 connnecting back to my own computer.
Port Numbers are like doors into a computer where different communications can be made to different programs.
Port 3000 is a common port for local web development servers.
*/