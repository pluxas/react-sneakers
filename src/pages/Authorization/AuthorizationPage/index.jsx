import React from 'react'

import LoginPage from '../LoginPage'
import './AuthorizationPage.scss'
import RegisterPage from '../RegisterPage'
import { Link, Route, Routes } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default HomePage