import React from 'react';
import './Booking.css';
import { auth } from "../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import Navbar from '../Navbar';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, push, ref,set } from 'firebase/database';

export default function Booking() {
  const Navigate = useNavigate();
  const [data,setData]=useState({});
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