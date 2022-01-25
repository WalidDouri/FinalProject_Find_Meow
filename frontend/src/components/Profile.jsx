import React, { useContext } from 'react'
import './Profile.scss'
import { authContext } from '../providers/Authprovider'

export default function Profile(props) {
  const { user } = useContext(authContext);
  
  return (
    <div className='profile'>
      <h2>My profile</h2>
      <p>{user &&  user.firstName} {user &&  user.lastName} </p>
      <p>{user &&  user.username} </p>
      <p>{user &&  user.phoneNumber} </p>
      <p>{user &&  user.email} </p>
    </div>
  )
}