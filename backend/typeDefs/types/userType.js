const { gql } = require('apollo-server')

const userType = gql`
  type User {
    username: String!
    passwordHash: String!
    id: ID!
  }
`

module.exports = {
  userType,
}