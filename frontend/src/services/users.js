import { gql } from '@apollo/client'

const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) { 
    createUser(username: $username, password: $password) { 
      username 
    }
  }
`

const LOGIN = gql`
  mutation login($username: String!, $password: String!) { 
    login(username: $username, password: $password) { 
      value 
    }
  }
`

export default {
  CREATE_USER,
  LOGIN
}