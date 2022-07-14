const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const http = require('http')
const express = require('express')
const cors = require('cors')

const jwt = require('jsonwebtoken')
const User = require('./models/user')

const { resolvers } = require('./resolvers')
const { typeDefs } = require('./typeDefs')

const app = express()
const httpServer = http.createServer(app)

app.use(cors())
app.use(express.static('build'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), provess.ENV.SECRET
      )
      const currentUser = await User
        .findById(decodedToken.id)
      return { currentUser }
    }
  }
})

module.exports = {
  app,
  server
}