import React from 'react'
// import cat1 from './assets/images/cat1'
// import Carousel from './Carousel'
// import Navbar from './components/Navbar'
import { Layout, Button } from 'antd';
import CatVideo from './CatVideo';
import '../Pages/Home.scss'

// const { Header, Footer, Sider, Content } = Layout;


export default function Home() {
  return (
    
    <div className='home'>
    <CatVideo/>
 
    </div>
  )
}


// {/*Walk through - https://react-bootstrap-v3.netlify.app/components/carousel/ */}