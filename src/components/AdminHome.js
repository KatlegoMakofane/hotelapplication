import React from 'react'
import Navbar from './Navbar';
import "./AdminHome.css";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import  { useEffect} from "react";
import Adnavbar from './Adnavbar';

export default function AdminHome() {
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
    <Adnavbar/>

  )
}

