const mongoose = require("mongoose")

const todoschema = new mongoose.Schema({
    record :{
        type:String,
        required:true
    }
},{timestamps:true})

const todo = mongoose.model("todo",todoschema)
module.exports = todo
