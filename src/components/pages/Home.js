import React from 'react';
import Swipers from '../swiper';
import './Home.css';
import Hotelinfo from '../Hotelinfo';
import { auth } from "../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import Navbar from '../Navbar';
import { signOut, onAuthStateChanged } from "firebase/auth";



export default function Home() {
  
  const Navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // read
       
      } else if (!user) {
        Navigate("/");
      }
    });
  }, );

 
  return (
    
       <div > 
       <Navbar/>
      <Swipers/>
      
      <Hotelinfo/>
      <h1 className='home' >Epic</h1>
    </div>
   
   
   
    
  );
}