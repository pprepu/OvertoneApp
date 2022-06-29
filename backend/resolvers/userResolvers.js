const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const userResolvers = {
  Query: {
    me: (root, args, context) => {
      return context.currentUser
    }
  },

  Mutation: {
    createUser: async (root, args) => {

      const saltRounds = 10

      if (!(args.password && args.password.length >= 5)) {
        throw new UserInputError('invalid password value')
      }

      const passwordHash = await bcrypt.hash(args.password, saltRounds)
      const user = new User({ 
        username: args.username, 
        passwordHash 
      })
      try {
        const savedUser = await user.save()
        return savedUser
      } catch(error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })

      const passwordIsCorrect = user !== null
        ? await bcrypt.compare(args.password, user.passwordHash)
        : false
  
      if (!(user && passwordIsCorrect)) {
        throw new UserInputError("invalid credentials")
      }
  
      const userForToken = {
        username: user.username,
        id: user._id,
      }
  
      return { value: jwt.sign(userForToken, process.env.SECRET) }
    },
  },
}

module.exports = {
  userResolvers,
}