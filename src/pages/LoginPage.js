import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginPage = ({ setUser }) => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    // run auth fetch
    setUser({
      username
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='username'
        placeholder='Username...'
        value={ username }
        onChange={ event => setUsername(event.target.value)} />
      <input
        name='password'
        type='password'
        placeholder='Password...'
        value={ password }
        onChange={ event => setPassword(event.target.value)} />
      <input type='submit'/>
    </form>
  )
}

export default LoginPage

LoginPage.propTypes = {
  setUser: PropTypes.func.isRequired
}
