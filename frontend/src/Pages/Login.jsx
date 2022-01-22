
import React from 'react'
import CarouselTest from '../components/Carousel'
import LoginForm from '../components/LoginForm'
import './Login.scss'


export default function Login() {
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