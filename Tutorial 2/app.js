// Using Express
const express =  require('express') 

// Express app

const app = express()

// register the view engine ejs automatically looks in the views folder
app.set('view engine', 'ejs')

// listen for requests 
app.listen(3000)

app.get('/', (request, response)=>{
    response.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (request, response)=>{
    response.sendFile('./views/about.html', {root: __dirname})
})

//404 page when a user uses aan url that has to link mapped to it.
app.use((request, response)=>{
    response.status(404).sendFile('./views/404.html', {root: __dirname})
})

