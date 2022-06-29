const { searchResolvers } = require('./searchResolvers')
const { userResolvers } = require('./userResolvers')
const { dateScalar } = require('./dateScalar')

const resolvers = { Date: dateScalar, ...searchResolvers, ...userResolvers }

module.exports = {
  resolvers,
}