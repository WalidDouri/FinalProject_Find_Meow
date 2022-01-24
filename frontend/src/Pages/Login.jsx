
import CarouselTest from '../components/Carousel'
import React, { useContext } from 'react'
import LoginForm from '../components/LoginForm'
import './Login.scss'
import { authContext } from '../providers/Authprovider'
import { Navigate } from 'react-router-dom'


export default function Login() {
  const { auth, user } = useContext(authContext);

  if (auth && user) {
  return <Navigate to={`/mypage/${user.id}`}  />
  }
  return (
    <div id='login'>
     
      <h1>THIS IS THE Login</h1>
      <div id="Left" >
      <LoginForm />
      </div>
      <div id="Right">
      <CarouselTest/>
      </div>
    </div>
  )
}