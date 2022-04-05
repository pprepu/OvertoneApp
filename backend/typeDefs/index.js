const { query } = require('./query')
const { searchType } = require('./types')
const { mutation } = require('./mutation')

const typeDefs = [ query, searchType, mutation ]

module.exports = {
  typeDefs,
}