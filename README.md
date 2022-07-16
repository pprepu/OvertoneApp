# OvertoneApp

The app can be found at: [heroku](https://overtoneapp-react.herokuapp.com/)

## What is this app?

The purpose of the app is to explore the overtone series emerging from different notes. This exploring can be useful when analyzing orchestration techniques or harmonic voicings in general. Furthermore, It can be used to generate voicings of your own while composing.

## How was this app created?

The backend for this app was built with Node.js using Apollo-Server to create a GraphQL API. The database of users is a MongoDB database managed with Mongoose, an ODM library for Node.js (and MongoDB). Also, user administration is implemented with tools, such as bcrypt for password security management and JSON web tokens for token based authentication.

The frontend was built with the React-library using hooks to control the component states. Communication with the backend is established with the Apollo-client. Styles were implemented using the Styled-components library built for creating component level styling. In the near future, I will add more responsive design to the application, but currently the experience is not optimized for smaller screens.

In the code, stylistic uniformity in both backend and frontend is achieved by using a static analysis tool ESLint.

### Testing

A test-driven-development was NOT used for this app and more tests are still being created for both front- and backend :)

### Continuous integration

So far, only a skeleton workflow for Github Actions has been created, but it is being expanded in the near future.

### Known issues
- frontend is not connected to backend in production
- component styles are not final
- responsive design is not fully implemented
- harmful layout shifts can be experienced

![GitHub Actions](https://github.com/pprepu/OvertoneApp/actions/workflows/pipeline.yml/badge.svg)
