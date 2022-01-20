import { Row } from 'antd'
import Layout, { Content } from 'antd/lib/layout/layout'
import React from 'react'
import CarouselTest from '../components/Carousel'


import SignupForm from '../components/SignupForm'
import './SignUp.scss'


export default function SignUP() {
  return (
    // <div className='signup'>
      <div >

        <Layout id='Lurry'>
          {/* <Content id='Kirkland'> */}
         
          <SignupForm />
          {/* </Content> */}
        
      </Layout>
  
    </div>
  )
}

