const { GraphQLScalarType, Kind } = require('graphql')

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'custom Date type',
  serialize(value) {
    return value.getTime()
  },

  parseValue(value) {
    return new Date(value)
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10))
    }
    return null
  },
})

module.exports = {
  dateScalar
}