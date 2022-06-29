const { gql } = require('apollo-server')

const mutation = gql`
  type Mutation {
    addSearch(
      note: String!
      overtones: Int!
      answer: [String!]
    ): Search
    createUser(
      username: String!
      password: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
  }
`

module.exports = {
  mutation
}