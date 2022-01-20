import React from "react";
import { Link } from 'react-router-dom'
import { Button } from "../components/Button";
import './CatVideo.scss';
import mixCat from "./video/mixCat.mp4";

export default function CatVideo() {
  
  return (
    <div className='hero-container'>
      <video autoPlay loop muted>
      <source src={mixCat} type='video/mp4'/>
      </video>
      <h1>Find Me-Ow <i class="fas fa-cat"></i></h1>
      <p>IS YOUR CAT Missing?</p>
      <div className='hero-btns'>
        <Link to='/about'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          HOW IT WORKS
        </Button>
        </Link>
        <Link to='/search-pet'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          
          LOST/FOUND <i class="fas fa-search"></i>
        </Button>
        </Link>
        <Link to='/report-pet'>
        <Button
          
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REPORT YOUR CAT <i class="far fa-flag"></i>
        </Button>
        </Link>
      </div>
    </div>
  )
}

