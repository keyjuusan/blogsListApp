const logger = require("../utils/logger")
const mongoose = require("../app")

const blogEsquema = new mongoose.Schema({
    autor: String,
    titulo: String,
    link: String,
    likes: String
})

blogEsquema.set("toJSON",{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})
//aqui va el plugin del valor unico en tal caso de necesidad.

module.exports = mongoose.model("Blog",blogEsquema)