import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from "./Loading";

import './CatForms.scss'


export default function CatFormTEST() {

  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/catforms/${id}`)
      .then(res => {
        const postData = res.data;
        setPost(postData);
      })
      .catch(err => {
        console.log(err)
      })
  }, [id]);

  if (!post) {
    return <Loading />
  }
  
  return (
    <>
    <div className='box'> 
      <img src={post.image}/>
    </div>
      <div className='overThis'>
        <div className='boxDetails'>
          <p>{post.cat_name} </p>
          <p>{post.status} </p>
          <p>{post.description}</p>
        </div>
      <div className='boxMap'>
          <p> TEST</p>
          </div>
        </div>
      
    
    </>
  
  )
}

