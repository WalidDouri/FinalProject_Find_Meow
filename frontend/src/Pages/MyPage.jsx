import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MyPage.scss'
import Profile from '../components/Profile'
import CatForms from '../components/CatForms'
import './MyPage.scss'
import axios from 'axios';


export default function MyPage() {
  const [state, setState] = useState({
    user: null,
    catForms: []
  });
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    axios.get(`http://localhost:3001/api/mypage/${userId}`)
      .then(res => {
        const user = res.data.user;
        const catForms = res.data.catForms;
        setState(prev => ({...prev , user, catForms}));
      })
      .catch (err => {
        console.log(err)
      })
    }, [userId]);

return (
  <div className='mypage'>
    {/* <Navbar /> */}
    <h1>THIS IS THE MyPage</h1>

    <Profile user={state.user} />
    <CatForms catForms={state.catForms} />
  </div>
)
}