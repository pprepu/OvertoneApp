const User = require('../models/user')

const getUsers = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const createQuery = function (query, arg1, arg2) {
  switch (query) {
    case 'createUser':
      if (arguments.length !== 3) {
        console.log('createQuery/createUser called with a strange amount of arguments')
      }
      return {
        query: 'mutation createUser($username: String!, $password: String!) { createUser(username: $username, password: $password) { username }}',
        variables: { username: arg1, password: arg2 }
      }
    case 'login':
      if (arguments.length !== 3) {
        console.log('createQuery/login called with a strange amount of arguments')
      }
      return {
        query: 'mutation login($username: String!, $password: String!) { login(username: $username, password: $password) { value }}',
        variables: { username: arg1, password: arg2 }
      }

    default:
      console.log('createQuery could not find a query')
  }
}


module.exports = {
  getUsers,
  createQuery
}