
const { ApolloServer } = require('apollo-server')

const { resolvers } = require('../resolvers')
const { typeDefs } = require('../typeDefs')

const testServer = new ApolloServer({
  typeDefs,
  resolvers
})

describe('with the fixed data', () => {
  test('searchCount returns the correct amount of searches', async () => {
    const result = await testServer.executeOperation({
      query: 'query { searchCount }'
    })

    expect(result.errors).toBeUndefined()
    expect(result.data.searchCount).toBe(3)
  })
})