import React from 'react';
import './App.css';
// import useApplicationData from './hooks/useApplicationData';
// import users from './components/users';
import Navbar from './components/Navbar';
import SubmitForm from './components/SubmitForm';
import CommentBoxList from './components/CommentBoxList';

import About from './Pages/About';
import Home from './Pages/Home';
import ReportPet from './Pages/ReportPet';
import SearchPet from './Pages/SearchPet';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import MyPage from './Pages/MyPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';



export default function App() {
    return (
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/report-pet" element={<ReportPet />}> 
                <Route path="/report-pet/submit-form" element={<SubmitForm />}/>
              </Route>
              <Route path="/search-pet" element={<SearchPet />}/>
              <Route path="/sign-up" element={<SignUp/>} />
              <Route path="/login" element={<Login/>} />

              <Route path="/comments" element={<CommentBoxList
              //  commentsUrl="http://localhost:3000/comments"
              //  currentUserId="2"
               />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* need to implement the function below */}

              <Route path="/mypage/:id" element={<MyPage />} />
              {/* <Route path="/comments" element={<Comment />} /> */}
              <Route path="/comments" element={<CommentsList1
              //  commentsUrl="http://localhost:3000/comments"
              //  currentUserId="2"
              />} />

              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
              <Footer/>
      </BrowserRouter>     
    );
}