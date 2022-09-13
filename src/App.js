import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import { Routes,Route  } from 'react-router-dom';
import About from './components/pages/About';
import Booking from './components/pages/Booking';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/AdRooms';
import Welcome from './components/Welcome'
import Homepage from './components/Homepage'
import Admin from './components/Admin'
import Profile from './components/pages/Profile';
import AdminHome from './components/AdminHome'

import AdRooms from './components/pages/AdRooms';
import AdUsers from './components/pages/AdUsers';
import AdBookings from './components/pages/AdBookings';
function App() {
  return (
    <div>
     <Routes>
          <Route path="/" exact element={<SignUp/>} />
            
          <Route path="/homepage" exact element={<Homepage/>} /> 
          <Route path="/Welcome" exact element={<Welcome/>} />
           <Route path="/Admin" exact element={<Admin/>} />
           <Route path="/AdminHome" exact element={<AdminHome/>} />
      
        <Route path="/about" element={<About/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/booking" element={<Booking/>} />
         
           <Route path="/contact-us" element={<ContactUs/>} />
       
         <Route path="/sign-up" element={<SignUp/>} />
         
        <Route path="/marketing" element={<Marketing/>} />
          
        <Route path="/profile" element={<Profile/>} />
        <Route path="/AdBookings" element={<AdBookings/>} />
        <Route path="/AdRooms" element={<AdRooms/>} /> 
       < Route path="/AdUsers" element={<AdUsers/>} /> 
          </Routes>
      
   </div>
    
  );
}

export default App;