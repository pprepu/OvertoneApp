const mongoose = require('mongoose')
const config = require('./utils/config')
const { server } = require('./server')

const express = require('express')
const http = require('http')
const { app }  = require('./server')
const cors = require('cors')

const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const jwt = require('jsonwebtoken')
const User = require('./models/user')

const { resolvers } = require('./resolvers')
const { typeDefs } = require('./typeDefs')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

async function startApolloServer(typeDefs, resolvers) {
  // const app = express()
  // app.use(cors())
  // app.use(express.static('build'))
  const httpServer = http.createServer(app)
  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   csrfPrevention: true,
  //   cache: 'bounded',
  //   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  // })
  await server.start()
  server.applyMiddleware({ app })
  await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)

// server.start()
// .then(() => server.applyMiddleware({app}))


// app.use(cors())
// app.use(express.static('build'))

// app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`Server ready at ${url}`)
// })