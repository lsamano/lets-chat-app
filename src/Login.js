import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({ setUser }) => {
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
    <div>
    Please login.
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
    </ div>
  )
}

export default Login

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}
