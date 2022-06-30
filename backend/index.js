const mongoose = require('mongoose')
const config = require('./utils/config')
const { server } = require('./server')

const express = require('express')
const app = express()
const cors = require('cors')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

server.applyMiddleware({app})

app.use(cors())
app.use(express.static('build'))

app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})