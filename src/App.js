import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import { BrowserRouter, Routes,Route,  } from 'react-router-dom';
import About from './components/pages/About';
import Booking from './components/pages/Booking';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';

import Profile from './components/pages/Profile';

function App() {
  return (
    
    
    
  <BrowserRouter>
   <Navbar/>
    
   <Routes>
        <Route path="/" exact element={<Home/>} />
        </Routes>
        <Routes><Route path="/about" element={<About/>} /></Routes>
        
        <Routes> <Route path="/booking" element={<Booking/>} /></Routes>
       
        <Routes>   <Route path="/contact-us" element={<ContactUs/>} /></Routes>
     
        <Routes><Route path="/sign-up" element={<SignUp/>} /></Routes>
        
        <Routes><Route path="/marketing" element={<Marketing/>} /></Routes>
        
        <Routes><Route path="/profile" element={<Profile/>} /></Routes>
        
        </BrowserRouter>
 
  );
}

export default App;