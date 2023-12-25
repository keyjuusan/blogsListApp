const mongoose = require("mongoose")
const config = require("./utils/config")
const logger = require("./utils/logger")

const mongoUrl = config.MONGODB_URI

mongoose.connect(mongoUrl).then(()=>{
    logger.info("Conectado a MongoDB")
})

module.exports = mongoose