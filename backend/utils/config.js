require('dotenv').config()

const LOCAL_MONGODB_URI = 'mongodb://localhost:27017/OvertoneApp_test'
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = LOCAL_MONGODB_URI
} else if (process.env.NODE_ENV === 'development') {
  MONGODB_URI = process.env.DEV_MONGODB_URI
}

module.exports = {
  MONGODB_URI
}