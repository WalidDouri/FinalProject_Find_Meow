import React, { useContext } from 'react'
import LoginForm from '../components/LoginForm'
import './Login.scss'
import { authContext } from '../providers/Authprovider'
import { Navigate } from 'react-router-dom'


export default function Login() {
  const { auth } = useContext(authContext);

  if (auth) {
    return <Navigate to='/search-pet' />
  }
  return (
    <div className='login'>
      {/* <Navbar /> */}
      <h1>THIS IS THE Login</h1>
      <LoginForm />
    </div>
  )
}