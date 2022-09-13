
import Adnavbar from '../Adnavbar'
import app, { auth } from "../../firebase.js";
import  { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useParams} from "react-router-dom";
import { signOut, onAuthStateChanged, getAuth } from "firebase/auth";
import db from "../../firebase.js";
import "./AdRooms.css"
import {toast} from "react-toastify"
import { getDatabase, push, ref,set } from 'firebase/database';



console.log(db)

const initialState ={
   name:"",
   email:"",
   contact:""
}

 const AdRooms =() =>{
   const Navigate = useNavigate();
   const[state,setState] =useState(initialState);
   const[data,setData] =useState({});

   const{name,email,contact} =state;
  

console.log("this",db)
   const handleInputChange =(e) =>{
    const {name,value}=e.target;
    setState({...state,[name]:value});
   };

   function handleSumbit(e){
    e.preventDefault();
    const db=getDatabase(app);
    const reference=ref(db,"Rooms/"+"user");
    // if(!name||!email || !contact){
    //    toast.error("Please provide value in each input field")
    // }else{
     push(reference,{
      name:name,
      email:email,
      contact:contact

     }).then(res=>console.log(res))
     .catch(err=>console.log(err))
    
    
   };

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
      <h1 >Rooms</h1>
        <div  style={{marginTop:"100px", textAlign:"center",alignContent:"center",justifyContent:"center",}}>
        <center>
            <form 
              style={{
               
                padding: "15px",
                maxWidth:"400px",
                alignContent:"center",
                justifyContent:"center",
                background:"red",
                
                 
              }}
              onSubmit={handleSumbit}
              >
              <label >Name</label>
              <input
                 type="text"
                 id="name"
                 name='name'
                 placeholder='Your Name...'
                 value={name}
                 onChange={handleInputChange}
              />
              <label >Email</label>
              <input
                 type="email"
                 id="email"
                 name='email'
                 placeholder='Your Email...'
                 value={email}
                 onChange={handleInputChange}
              />
              <label >Contact</label>
              <input
                 type="number"
                 id="contact"
                 name='contact'
                 placeholder='Your Contact No...'
                 value={contact}
                 onChange={handleInputChange}
              />

              <input type="submit" value="Save"/>
            </form>
            </center>
          </div>
    </div>
  );
}
export default AdRooms;