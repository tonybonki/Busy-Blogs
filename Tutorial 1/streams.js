const fs = require('fs')
const readStream =  fs.createReadStream('./docs/blog1.txt')

readStream.on('data', (chunk)=>{
    console.log('-----NEW CHUNK-----')
    console.log(chunk.toString())
})