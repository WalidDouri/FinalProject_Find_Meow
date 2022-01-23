import React, { Fragment } from 'react'
import CatFormItem from './CatFormItem'

export default function CatForms(props) {
  const hasCatForm = props.catForms.length > 0;
  console.log(props.catForms);

  const catFormItems = props.catForms.map(catFormItem =>
    <CatFormItem
      key={catFormItem.id}
      name={catFormItem.cat_name}
      age={catFormItem.age}
      gender={catFormItem.gender}
      description={catFormItem.description}
      image={catFormItem.image}
      last_seen_date={catFormItem.last_seen_date}
    />
  )
  return (
    <Fragment>
      <h2>This is cat form</h2>
      <ul>{catFormItems}</ul>
    </Fragment>
  )
}