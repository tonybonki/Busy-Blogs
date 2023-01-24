// Using Express
const express =  require('express') 

// Express app

const app = express()

// register the view engine ejs automatically looks in the views folder
app.set('view engine', 'ejs')

// listen for requests 
app.listen(3000)

//Rounting and listening for requests

app.get('/', (request, response)=>{
    response.render('index')
})

app.get('/about', (request, response)=>{
    response.render('about')
})

app.get('/about', (request, response)=>{
    response.sendFile('./views/about.html', {root: __dirname})
})

//404 page when a user uses aan url that has to link mapped to it.
app.use((request, response)=>{
    response.status(404).render('404')
})

