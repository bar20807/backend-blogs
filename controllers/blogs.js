/* eslint-disable linebreak-style */
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (req, res) => {
    Blog.find({}).then((blogs) => {
        res.json(blogs)
    })
})

blogsRouter.post('/', (req, res, next) => {
    //La función del controlador de eventos puede acceder a los datos de la propiedad body del objeto de request.
    const newBlog = req.body
    //revisamos si el contenido no esta vacio
    if (!newBlog) {
        //Si a los datos recibidos les falta un valor para la propiedad content, el servidor responderá a la solicitud con el código de estado 400 bad request
        return res.status(400).json({
            error: 'content missing',
        })
    }

    const blog = new Blog({
        title: newBlog.title,
        author:  newBlog.author,
        url:  newBlog.url,
        likes: newBlog.likes
    })

    blog
        .save()
        .then(
            savedBlog => savedBlog.toJSON()
        )
        .then(
            jsonBlog => res.json(jsonBlog)
        )
        .catch((error) => next(error))
})

module.exports = blogsRouter