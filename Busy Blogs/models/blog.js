const mongoose =  require('mongoose');
// Define the structure of the documents (Construtor funciton)
const Schema = mongoose.Schema;

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();

//Define and create a new schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: date
      }
    // Added updated/created properties
}, { timestamps:true });

// Will look for the plural colllection name within the database ('Blogs')
const Blog = mongoose.model('Blog', blogSchema);

//Export the blog module
module.exports =  Blog;