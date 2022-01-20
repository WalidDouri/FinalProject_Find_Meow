import React from 'react'
import CarouselTest from '../components/Carousel'
// import AwesomeSlider from 'react-awesome-slider'

import SignupForm from '../components/SignupForm'
import './SignUp.scss'


export default function SignUP() {
  return (
    <div className='signup'>
      {/* <Navbar /> */}
      <h1>THIS IS THE Signup</h1>
      <SignupForm />
      <CarouselTest/>
    </div>
  )
}
