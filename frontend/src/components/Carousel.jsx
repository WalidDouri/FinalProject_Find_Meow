import React from 'react'
import { Carousel} from 'antd';
import './Carousel.scss'
import catLay from './images/catlay.png'
import blueEyes from './images/blueEyeCatSC.png'
import multiCat from './images/multiCatSC.png'
import grassCat from './images/grassCat.png'
import stripeCat from './images/stripeCatSC.png'
import test1 from './images/test1.jpg'
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
            width="85%" height="700"
            />
          </div>

          <div className='test'>
            <img src={blueEyes} alt="Blue Eyed Cat"
            width="85%" height="350"/>
          </div>
          
          <div className='test2'>
            <img src={multiCat} alt="Multi Colour Cat"
            width="85%" height="700"
            />
          </div>
          
          <div className='test3'>
            <img src={grassCat} alt="Cat in Grass"
            width="85%" height="700"/>
          </div>

          <div className='test4'>
            <img src={stripeCat} alt="Striped Cat"
            width="85%" height="700"/> 
          </div>
        </Carousel>
      </div>
  

    );
}

