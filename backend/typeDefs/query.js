const { gql } = require('apollo-server')

const query = gql`
  type Query {
    searchCount: Int!
    allSearches: [Search!]!
    me: User
  }
`

module.exports = {
  query,
}