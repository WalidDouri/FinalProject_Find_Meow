import React from 'react';
import CatForms from './CatForms';

export default function CatFormTEST(props) {
  console.log("props in catformTEST", props)
  return (
    <div className='box'> 
      <img src={props.image}/>
    </div>
  
  )
}

