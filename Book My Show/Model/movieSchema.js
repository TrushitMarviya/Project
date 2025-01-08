const { name } = require("ejs");
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
})

const movieSchema = mongoose.model('Movies',schema)

module.exports = movieSchema