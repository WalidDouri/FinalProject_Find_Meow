import React from 'react'
import { Card } from 'antd'
import './CatFormItem.scss'

export default function CatFormItem(props) {
  // const hasCatForms = props.catForms.length > 0;

  console.log(props.catFormItem);
  return (
    <div className="cat_form">
      <div className="cat_card">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="picture_of_cat" src={props.image} />}
      >
        <span>{props.name}</span>&nbsp;&nbsp;
        <span>{props.age}</span>
      </Card>
    </div>
  </div >
  )
}