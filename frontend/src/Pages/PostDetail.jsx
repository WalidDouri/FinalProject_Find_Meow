import React, { useContext } from 'react'
import CommentSection from '../components/CommentSection'
import PostItem from '../components/PostItem'
import './Login.scss'
import { authContext } from '../providers/Authprovider'
import { Navigate } from 'react-router-dom'



export default function PostDetail() {
  // const { auth, user } = useContext(authContext);

  // if (auth && user) {
  // return <Navigate to={`/mypage/${user.id}`}  />
  // }
  return (
    <div className='postDetail'>
      <h1>THIS Post and comments page</h1>
      <PostItem />
      <CommentSection />
    </div>
  )
}