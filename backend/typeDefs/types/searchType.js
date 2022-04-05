const { gql } = require('apollo-server')

const searchType = gql`
  scalar Date

  type Search {
    note: String!
    overtones: Int!
    answer: [String!]
    date: Date!
    id: ID!
  }
`

module.exports = {
  searchType,
}