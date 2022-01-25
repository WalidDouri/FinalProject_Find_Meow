import React from 'react'
import CatFormTEST from '../components/CatFormTEST'
import CommentSection from '../components/CommentSection'
import PostItem from '../components/PostItem'

import './PostDetail.scss'

export default function PostDetail() {
 
  return (
    <>
    <div className='detailsTitle'>
    <h1>Cat Details</h1>
    </div>
    <div className='postDetail'>
      <CatFormTEST/>
    </div>
      <CommentSection />
    </>
  )
}