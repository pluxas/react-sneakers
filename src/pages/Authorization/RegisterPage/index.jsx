import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../../../containers/SignUp'

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp/>
      <p>
        Have you account ? <button><Link to='/login'>sign in</Link></button>
      </p>
    </div>
  )
}

export default RegisterPage