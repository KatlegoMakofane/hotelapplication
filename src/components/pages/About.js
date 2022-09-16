
import './About.css';
import { auth } from "../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar';
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function About() {
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


  return( <div>
    <Navbar/>
    <h1 className='about' >About</h1>
  </div>);
}