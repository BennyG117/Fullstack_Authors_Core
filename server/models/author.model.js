const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include a {PATH}!"],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters!"],
  },
}, 
{timestamps:true}

);

const Author = mongoose.model("Author", AuthorSchema);
        
module.exports = Author;