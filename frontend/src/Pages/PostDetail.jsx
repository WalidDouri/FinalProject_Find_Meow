import React from 'react'
import CatFormTEST from '../components/CatFormTEST'
import CommentSection from '../components/CommentSection'
import PostItem from '../components/PostItem'

export default function PostDetail() {
 
  return (
    <>
    <div className='postDetail'>
      <CatFormTEST/>
    </div>
      <CommentSection />
    </>
  )
}