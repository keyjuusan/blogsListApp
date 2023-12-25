const blogsRouter = require("express").Router()
const Blog = require("../models/blog")

blogsRouter.get("/", (req, res) => {
    Blog.find({}).then((blogs) => {
      res.json(blogs);
    });
  });
  
  blogsRouter.post("/", (req, res) => {
    const body = req.body;
  
    const blog = new Blog({
      autor: body.autor,
      titulo: body.titulo,
      link: body.link,
      likes: body.likes
    });
  
    blog
      .save()
      .then((blogGuardado) => {
        res.status(201).json(blogGuardado);
      })
      .catch(() => {
        logger.info("problemon");
      });
  });

  module.exports = blogsRouter