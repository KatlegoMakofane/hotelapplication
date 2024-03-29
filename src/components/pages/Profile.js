import React from 'react';
import './Profile.css'
import { auth } from "../../firebaseConfig.js";
import { useNavigate} from "react-router-dom";
import  { useEffect, useState } from "react";
import Navbar from '../Navbar';
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Profile() {
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
    <div>
      <Navbar/>
      <h1 className='profile' >Profile</h1>
    </div>
  );
}