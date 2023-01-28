// Using Express
const {
    request
} = require('express')
const express = require('express')

// Express app

const app = express()

// Require the Mongoose Package

const mongoose = require('mongoose')

// Ignore deprecation warnings
mongoose.set('strictQuery', true);

// Connect to the MongoDb
const dbURI = 'mongodb+srv://bonchii:wammerFishy2465@busyblogs.oaldwlg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result)=>{
        // listen for requests 
        app.listen(3000)
    })

// Set public static directory to allow the browser to acess the files on the server
// What files should be static?
app.use(express.static("public"))


// register the view engine ejs automatically looks in the views folder
app.set('view engine', 'ejs')



// Middleware that fires for ever request because it it at the top fo the file


//Rounting and listening for requests

app.get('/', (request, response) => {
    const blogs = [{
            title: 'Sharks found in bathtub'
            , snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat deleniti incidunt ex mollitia odio, at numquam omnis. Itaque nobis maiores culpa earum consequuntur eius commodi totam libero nisi veritatis?'
        }
        , {
            title: 'Jason learned that hes not human'
            , snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat deleniti incidunt ex mollitia odio, at numquam omnis. Itaque nobis maiores culpa earum consequuntur eius commodi totam libero nisi veritatis?'
        }
        , {
            title: 'Micheal discovers the true meaning of life'
            , snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat deleniti incidunt ex mollitia odio, at numquam omnis. Itaque nobis maiores culpa earum consequuntur eius commodi totam libero nisi veritatis?'
        }
    , ]
    response.render('index', {
        title: 'blog'
        , blogs: blogs
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'about'
    })
})

app.get('/blogs/create', (request, response) => {
    response.render('create', {
        title: 'Create a blog'
    })
})

//404 page when a user uses aan url that has to link mapped to it.
// This is an example of middleware
app.use((request, response) => {
    response.status(404).render('404')
})