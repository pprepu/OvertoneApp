import {
  FormRow,
  FormInput,
  FormLabel,
  Button,
  Form,
  ErrorMessage
} from '../../globalStyles'

const Login = () => {

  const handleLogin = event => {
    event.preventDefault()
    console.log('something happened')
  }

  let username, password
  return (
    <>
      <ErrorMessage>
        {/* { showErrorMessage ? 'Login failed' : '' } */}
        CURRENTLY DISABLED
      </ErrorMessage>
      <Form onSubmit={ handleLogin }>
        <FormRow>
          <FormLabel>username:</FormLabel>
          <FormInput
            id='username'
            type='text'
            value={ username }
            name='username'
            onChange={ ({ target }) => console.log(target.value) }
          />
          <FormLabel>password:</FormLabel>
          <FormInput
            id='password'
            type='password'
            value={ password }
            name='password'
            onChange={ ({ target }) => console.log(target.value) }
          />
        </FormRow>
        <Button id='login-button' type="submit">login</Button>
      </Form>
    </>
  )
}

export default Login