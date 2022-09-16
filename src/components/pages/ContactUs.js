import React from 'react';
import './ContactUs.css';
import { auth } from "../../firebaseConfig.js";
import { useNavigate  } from "react-router-dom";
import  { useEffect, useState } from "react";
import Navbar from '../Navbar';
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function ContactUs() {
  const Navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // read
       
      } else if (!user) {
        Navigate("/");
      }
    });
  },);
  
  return(
    <div>
      <Navbar/>
      <h1 className='contact-us'>CONTACT us</h1>
      </div>
  )

}