const { ApolloServer } = require('apollo-server')

const jwt = require('jsonwebtoken')
const User = require('./models/user')

const { resolvers } = require('./resolvers')
const { typeDefs } = require('./typeDefs')

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
  server
}