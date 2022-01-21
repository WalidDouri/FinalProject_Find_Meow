import React from 'react'
import { Carousel} from 'antd';
import './Carousel.scss'

import streetCat from './images/streetCat2525.jpg'
import siameseCat from './images/siameseCat.jpg'
import blackCat from './images/blackCat3000x3755.jpg'
import pokeCat from './images/pokeCat1.jpg'

import test2 from './images/test2.jpg'


export default function CarouselTest (){

  // const contentStyle = {
  //   height: '700px',
  //   // color: '#fff',
  //   // lineHeight: '160px',
  //   // textAlign: 'center',
  //   // background: 'pink'

  // };

    return (
      <div className='catPhotos'>
        <Carousel autoplay>

          <div className='photo'>
            <img src={test2} alt="Grey Cat laying down"
            width="100%" height="1000"
            />
          </div>

          <div className='test'>
            <img src={blackCat} alt="Blue Eyed Cat"
            width="100%" height="1000"/>
          </div>
          
          <div className='test2'>
            <img src={streetCat} alt="Multi Colour Cat"
            width="100%" height="1000"
            />
          </div>
          
          <div className='test3'>
            <img src={siameseCat} alt="Cat in Grass"
            width="100%" height="1000"/>
          </div>

          <div className='test4'>
            <img src={pokeCat} alt="Striped Cat"
            width="100%" height="1000"/> 
          </div>
        </Carousel>
      </div>
  

    );
}

