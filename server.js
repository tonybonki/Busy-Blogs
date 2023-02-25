//Require a HTTP Module
const http = require('http');
const fs = require('fs')
const _ = require('lodash')

// Create a server
const server = http.createServer((request, response)=>{

    // set header content type to html
    response.setHeader('Content-Type', 'text/html')

    // Set the path based url that is requested
    let path = './views/'

    //Evaluate if the case matches with the requested url
    switch(request.url) {
        case '/': path += 'index.html'
        response.statusCode = 200
           break
        case '/about': path += 'about.html'
        response.statusCode = 200
            break
        default:path += '404.html'
        response.statusCode = 404
            break
    }

   // send a html file
   fs.readFile(path, (err, data)=>{
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

