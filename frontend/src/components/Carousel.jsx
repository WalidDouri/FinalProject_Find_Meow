import React from 'react'
import { Carousel} from 'antd';
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
      // <div className='catPhotos'>
        <Carousel className='catPhotos' autoplay>

          
            <img src={catLay} alt="Grey Cat laying down"/>
          

          
            <img src={blueEyes} alt="Blue Eyed Cat"/>
          
          
          
            <img src={multiCat} alt="Multi Colour Cat"/>
          
          
          
            <img src={grassCat} alt="Cat in Grass"/>
          

          
            <img src={stripeCat} alt="Striped Cat"/> 
          
        </Carousel>
        // {/* </div> */}
  

    );
}

