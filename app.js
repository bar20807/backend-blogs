/* eslint-disable linebreak-style */
const express = require('express')
const app = express()
const config = require('./utils/config')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const middelware = require('./utils/middelware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

// Connect to MongoDB Database
mongoose.connect(
    config.MONGODB_URI
).then(
    () => logger.info('connected to MongoDB')
).catch(
    error => logger.error('error connecting to MongoDB', error.message)
)

app.use(cors())
app.use(express.json())
app.use(middelware.requestLogger)
app.use('/api/blogs', blogsRouter)
app.use(middelware.unknownEndpoint)
app.use(middelware.requestLogger)

module.exports = app