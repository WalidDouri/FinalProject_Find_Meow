import React from 'react'
import CommentSection from '../components/CommentSection'
import PostItem from '../components/PostItem'

export default function PostDetail() {
  return (
    <>
    <div className='postDetail'>
      <PostItem />
    </div>
      <CommentSection />
    </>
  )
}