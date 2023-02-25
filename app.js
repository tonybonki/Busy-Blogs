// Using Express
const {
    request, response
} = require('express')
const express = require('express')

//Use path to aquire images and icons form the public folder
const path = require('path')

// Express app

const app = express()


// Set public static directory to allow the browser to acess the files on the server
// What files should be static?
app.use("/public", express.static(path.join(__dirname, 'public')));


var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Acess the Blog model from blog.js

const Blog = require('./models/blog');

// Require the Mongoose Package

const mongoose = require('mongoose');
const { render } = require('ejs');
const { result } = require('lodash');


// Ignore deprecation warnings
mongoose.set('strictQuery', true);

// Connect to the MongoDb
const dbURI = 'mongodb+srv://bonchii:wammerFishy2465@busyblogs.oaldwlg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result)=>{
        // listen for requests 
        app.listen(3000)
    })




// register the view engine ejs automatically looks in the views folder
app.set('view engine', 'ejs')


// Middleware that fires for ever request because it it at the top fo the file


//Rounting and listening for requests

app.get('/', (request, response) => {
    response.render('index', {})
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening for request on port 3000')
})

app.get('/blogs', (request,response)=>{
    Blog.find()
        .then((result)=>{
            response.render('blogs', {blogs:result})
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.post('/blogs', (request, response) => {
    const blog = new Blog(request.body)

    blog.save()
        .then((result) =>{
            response.redirect('/success')
        })
})



// Get a page with the object id
app.get('/blogs:id', (request, response) => {    
    const id = request.params.id;
    Blog.findById(id)
        .then(result => {
            response.render('blog-details', { blog: result})
        })
})

app.get('/blogs/create', (request, response) => {    
    response.render('create', {
        title: 'Create a blog'
    })
})

app.delete('/blogs/:id', (request, response) => {
    const id = request.params.id
    
    Blog.findByIdAndDelete(id)
        .then(result =>{
            response.json({ redirect: '/blogs' })
        })
        .catch(err => {console.log(err)})
})

// Get a sucess page when the user completes the form
app.get('/success', (request, response) => {    
    response.render('success')
})




//404 page when a user uses aan url that has to link mapped to it.
// This is an example of middleware
app.use((request, response) => {
    response.status(404).render('404')
})