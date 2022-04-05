const { gql } = require('apollo-server')

const mutation = gql`
  type Mutation {
    addSearch(
      note: String!
      overtones: Int!
      answer: [String!]
    ): Search
  }
`

module.exports = {
  mutation
}