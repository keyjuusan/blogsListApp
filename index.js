require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const logger = require("./utils/logger")
const config = require("./utils/config")
const middleware = require("./utils/middleware")
const blogsRouter = require("./controllers/blogs");

app.use(express.json());
app.use(cors())

morgan.token("body2", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(morgan(":method :url :status :req[body2] - :response-time ms :body2"));

app.use("/api/blogs",blogsRouter)

const puerto = config.PORT;
app.listen(puerto, () => {
  logger.info(`Servidor iniciado en el puerto ${puerto}`);
});
