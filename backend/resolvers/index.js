const { searchResolvers } = require('./searchResolvers')
const { dateScalar } = require('./dateScalar')

const resolvers = { Date: dateScalar, ...searchResolvers }

module.exports = {
  resolvers,
}