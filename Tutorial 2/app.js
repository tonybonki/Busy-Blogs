// Using Express
const { request } = require('express')
const express =  require('express') 

// Express app

const app = express()

// register the view engine ejs automatically looks in the views folder
app.set('view engine', 'ejs')

// listen for requests 
app.listen(3000)

//Rounting and listening for requests

app.get('/', (request, response)=>{
    const blogs = [
        {title:'Sharks found in bathtub', snippet:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat deleniti incidunt ex mollitia odio, at numquam omnis. Itaque nobis maiores culpa earum consequuntur eius commodi totam libero nisi veritatis?'},
        {title:'Jason learned that hes not human', snippet:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat deleniti incidunt ex mollitia odio, at numquam omnis. Itaque nobis maiores culpa earum consequuntur eius commodi totam libero nisi veritatis?'},
        {title:'Micheal discovers the true meaning of life', snippet:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat deleniti incidunt ex mollitia odio, at numquam omnis. Itaque nobis maiores culpa earum consequuntur eius commodi totam libero nisi veritatis?'},
    ]
    response.render('index', {title:'home', blogs:blogs})
})

app.get('/about', (request, response)=>{
    response.render('about', {title:'about'})
})

app.get('/blogs/create', (request, response)=>{
    response.render('create', {title:'Create a blog'})
})

//404 page when a user uses aan url that has to link mapped to it.
app.use((request, response)=>{
    response.status(404).render('404')
})

