import React from 'react';
import './App.css';
// import useApplicationData from './hooks/useApplicationData';
// import users from './components/users';
import Navbar from './components/Navbar';
// import Form from './components/Form';
import SubmitForm from './components/SubmitForm';


import About from './Pages/About';
import Home from './Pages/Home';
import ReportPet from './Pages/ReportPet';
import SearchPet from './Pages/SearchPet';
import SignUp from './Pages/SignUp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

    return (

      <BrowserRouter>
        <Navbar />
        {/* <Form /> */}
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
             {/* <Routes> */}
              <Route path="/report-pet" element={<ReportPet />}> 
                <Route path="/report-pet/submit-form" element={<SubmitForm />}/>
              </Route>
              {/* </Routes> */}
              <Route path="/search-pet" element={<SearchPet />}/>
              <Route path="/sign-up" element={<SignUp/>} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
      </BrowserRouter>     
    );
}