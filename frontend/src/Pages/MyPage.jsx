import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import './MyPage.scss'
import Profile from '../components/Profile'
import CatForms from '../components/CatForms'
import './MyPage.scss'
import { authContext } from '../providers/Authprovider'
// import CatFormTEST from '../components/CatFormTEST'
// import Confirmation from '../components/Confirmation'


export default function MyPage() {
  const { auth } = useContext(authContext);

  if (auth) {
    return (
      <div className='mypage'>
        <h1>My Page</h1>
        <Profile />
        <CatForms />
        {/* <Confirmation/> */}
      </div>
    )
  } else {
    return <Navigate to="/login" />
  }
}