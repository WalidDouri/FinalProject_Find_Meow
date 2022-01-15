import './App.css';
// import useApplicationData from './hooks/useApplicationData';
// import users from './components/users';
import Navbar from './components/Navbar';
import About from './Pages/About';
// import Report_Pet from './components/Report_Pet';
// import Search_Pet from './components/Search_Pet';
// // import Login from './components/Login';
// import Form from './components/Form';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

    return (
      
      <BrowserRouter>
        <Routes>
          {/* Nested Routes */}
          <Route path="/" element={<Navbar />}>
            {/* <Route path="home" element={<Home />}/> */}
            <Route path="about" element={<About />}/>
            {/* <Route path="report Pet" element={<Report_Pet />}/>
            <Route path="search Pet" element={<Search_Pet />}/> */}
            {/* <Route path="Login" exact /> */}
          </Route>
        </Routes>
      </BrowserRouter>     
    );
}