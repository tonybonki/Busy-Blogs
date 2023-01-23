//Require a HTTP Module
const http = require('http');
const fs = require('fs')
// Create a server
const server = http.createServer((request, response)=>{
    console.log(request.url, request.method)

    // set header content type
    response.setHeader('Content-Type', 'text/html')

   // send a html file
   fs.readFile('./views/index.html', (err, data)=>{
    if (err){
        console.log(err)
        response.end()
    }else{
        response.end(data)
    }
   })
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for request on port 3000')
})

/*
Local host is like domain names but takes us to a loop back ip adress 127.0.0.1 connnecting back to my own computer.
Port Numbers are like doors into a computer where different communications can be made to different programs.
Port 3000 is a common port for local web development servers.
*/

