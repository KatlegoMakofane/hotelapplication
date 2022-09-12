import React from 'react';
import './Booking.css';
import { auth } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import Navbar from '../Navbar';
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Booking() {
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
  
  return (<div>
    <Navbar/>
  <h1 className='booking'  >Booking</h1>
 
  <h2>LIfe</h2>
  </div>
  );
}