import React from 'react'
import CarouselTest from '../components/Carousel'
// import AwesomeSlider from 'react-awesome-slider'

import SignupForm from '../components/SignupForm'
import './SignUp.scss'


export default function SignUP() {
  return (
    <div id="box">
       <div id="LCard" >
        <SignupForm />
       </div>
       <div id="RCard">
        <CarouselTest/>
       </div>
    </div>
  )
}
