import React from 'react'
import { Carousel, Image } from 'antd';
import './Carousel.scss'
import catLay from './images/catlay.png'
import blueEyes from './images/blueEyeCatSC.png'
import multiCat from './images/multiCatSC.png'
import grassCat from './images/grassCat.png'
import stripeCat from './images/stripeCatSC.png'


export default function CarouselTest (){

  // const contentStyle = {
  //   height: '500px',
  //   // color: '#fff',
  //   // lineHeight: '160px',
  //   // textAlign: 'center',
  //   // background: 'pink'

  // };

    return (
      <div className='catPhotos'>
        <Carousel autoplay>

          <div className='photo'>
            <img src={catLay} alt="Grey Cat laying down"/>
          </div>

          <div className='test'>
            <img src={blueEyes} alt="Blue Eyed Cat"/>
          </div>
          
          <div className='test2'>
            <img src={multiCat} alt="Multi Colour Cat"/>
          </div>
          
          <div className='test3'>
            <img src={grassCat} alt="Cat in Grass"/>
          </div>

          <div className='test4'>
            <img src={stripeCat} alt="Striped Cat"/> 
          </div>
        </Carousel>
      </div>
  

    );
}

