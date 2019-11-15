import React from 'react'
import PropTypes from 'prop-types'

const Login = (props) => {
  return (
    <div>
    Please login.
    <form>
    <input name='username' placeholder='Username...' />
    <input name='password' type='password' placeholder='Password...' />
    <input type='submit'/>
    </form>
    </ div>
  )
}

export default Login
