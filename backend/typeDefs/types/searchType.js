const { gql } = require('apollo-server')

// currently not used, will be added back later (probably in a modified form)
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