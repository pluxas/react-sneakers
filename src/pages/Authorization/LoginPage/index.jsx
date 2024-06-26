import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../../../containers/Login'

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login/>
      <p>
        or <button> <Link to='/Registration'>Registration</Link> </button>
      </p>
    </div>
  )
}

export default LoginPage