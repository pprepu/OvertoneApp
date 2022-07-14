
const mongoose = require('mongoose')

const User = require('../models/user')
const bcrypt = require('bcrypt')

const config = require('../utils/config')
const helper = require('./test_helper')

const { server } = require('../server')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

describe('while there is a user in the database', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('my_secret_password', 10)
    const user = new User({
      username: 'testerOT',
      passwordHash
    })

    await user.save()
  })

  test('a new user with a non-duplicate username and a valid password can be created', async () => {
    const usersAtStart = await helper.getUsers()

    const newUser = {
      username: 'unique_user',
      password: 'myPassword'
    }

    const result = await server.executeOperation(
      helper.createQuery('createUser', newUser.username, newUser.password)
    )

    expect(newUser.username).toBe(result.data.createUser.username)

    const usersAtEnd = await helper.getUsers()

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })

  test('logging in returns a token with a "value"-field', async () => {
    const userLoggingIn = {
      username: 'testerOT',
      password: 'my_secret_password'
    }

    const result = await server.executeOperation(
      helper.createQuery('login', userLoggingIn.username, userLoggingIn.password)
    )
    console.log('data', result.data)
    expect(result.data.login.value).toBeDefined()
  })
})

afterAll(() => {
  mongoose.connection.close()
})