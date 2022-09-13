import React from 'react';
import Adnavbar from '../Adnavbar'
import { auth } from "../../firebase.js";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
export default function AdRooms() {
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
      <h1 className='marketing'>Rooms</h1>
    </div>
  );
}