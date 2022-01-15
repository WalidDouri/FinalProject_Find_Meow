import React from 'react';
import './App.css';
// import useApplicationData from './hooks/useApplicationData';
// import users from './components/users';
import Navbar from './components/Navbar';


import About from './Pages/About';
import Home from './Pages/Home';
import ReportPet from './Pages/ReportPet';
import SearchPet from './Pages/SearchPet';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

    return (

      <BrowserRouter>
        <Navbar />
        
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/report-pet" element={<ReportPet />}/> 
              <Route path="/search-pet" element={<SearchPet />}/>
              {/* <Route path="Login" exact /> */}
            </Routes>
      </BrowserRouter>     
    );
}