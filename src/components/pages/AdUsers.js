import React from 'react'
import Adnavbar from '../Adnavbar'
import { auth } from "../../firebaseConfig.js";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";

function AdUsers() {
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
    <Adnavbar/>
     <h1 >adUsers</h1>
    
    </div>
    
  )
}

export default AdUsers