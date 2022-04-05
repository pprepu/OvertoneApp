const { v1: uuid } = require('uuid')

let { searches } = require('../data')

const searchResolvers = {
  Query: {
    searchCount: () => searches.length,
    allSearches: () => searches,
  },

  Mutation: {
    addSearch: (root, args) => {
      const search = { ...args, id: uuid(), date: new Date() }
      searches = searches.concat(search)
      return search
    },
  }
}

module.exports = {
  searchResolvers,
}