import React from 'react'

export default function CatFormItem(props) {
  // const hasCatForms = props.catForms.length > 0;
  console.log(props.catFormItem);
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
      <p>{props.description}</p>
      <img 
      src={props.image}
      alt="cat_image"
      />
    </div>
  )
}