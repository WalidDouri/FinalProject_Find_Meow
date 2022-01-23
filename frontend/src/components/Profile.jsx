import React from 'react'
import './Profile.scss'

export default function Profile(props) {
  console.log("props.user======", props.user);
  return (
    <div className='profile'>
      <h2>This is user profile</h2>
      <p>{props.user &&  props.user.first_name} {props.user &&  props.user.last_name} </p>
      <p>{props.user &&  props.user.username} </p>
      <p>{props.user &&  props.user.phone_number} </p>
      <p>{props.user &&  props.user.email} </p>
    </div>
  )
}