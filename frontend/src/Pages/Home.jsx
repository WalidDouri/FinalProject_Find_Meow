import React from 'react'
// import cat1 from './assets/images/cat1'
// import Carousel from './Carousel'
// import Navbar from './components/Navbar'
import { Layout, Button } from 'antd';

import '../Pages/Home.scss'

// const { Header, Footer, Sider, Content } = Layout;


export default function Home() {
  return (
    
    <div className='home'>
    <h1>HOME PAGE </h1>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    </div>
  )
}


// {/*Walk through - https://react-bootstrap-v3.netlify.app/components/carousel/ */}