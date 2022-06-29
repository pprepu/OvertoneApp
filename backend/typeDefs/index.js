const { query } = require('./query')
const { searchType, userType, tokenType } = require('./types')
const { mutation } = require('./mutation')

const typeDefs = [ query, searchType, userType, tokenType, mutation ]

module.exports = {
  typeDefs,
}