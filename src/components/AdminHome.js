import React from 'react'
import Navbar from './Navbar';
import "./AdminHome.css";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import  { useEffect,useState} from "react";
import Adnavbar from './Adnavbar';
import { getDatabase, onValue, push, ref,set ,remove,child} from 'firebase/database';
import db from "../firebaseConfig.js";
import {Link} from 'react-router-dom'
export default function AdminHome() {


   const [data,setData]=useState({});

 
   function onDelete(e){
      e.preventDefault();
         console.log(e.target.dataset.id);
         const id=e.target.dataset.id;
           const db=getDatabase();

     const reference=ref(db,"user"+{id})
   child(reference,"user").removw()

    if(window.confirm("Are you sure you wanted to delete the contact"))
    {
      //remove(ref(db,"Rooms/"{id})(err)=>{

       db.child('user',{id}).remove((err)=>{
        if(err){
          alert.error(err)
        }else{
          alert.success("contact Deleted Successfully")
        }
       })
     
      
    }
   }
   console.log(onDelete)
  //    useEffect(()=>{
  //    const db=getDatabase();
  //    const reference=ref(db,"Rooms/"+"user");
  //    onValue(reference,(snapshot)=>{
  //     const data =snapshot.val();
  //     let dataObj=Object.assign(data);
  //     const dataArr=[];
  //        for (const keys in dataObj) 
  //        {
  //             dataArr[keys]=dataObj[keys]
  //            data[keys]=dataObj[keys]
  //         }
  //     setData(dataArr);
  //      })

  //      },[])
  
  
 

    
  //  console.log("data:===",data);
  
    
    //  const dataArr= handleSumbited();

    const Navigate = useNavigate();
    useEffect(() => {
    
     

      auth.onAuthStateChanged((user) => {
        if (user) {
          // read
         
        } else if (!user) {
          Navigate("/");
        }
      });

        const db=getDatabase();
        const reference=ref(db,"Rooms/"+"user");
        onValue(reference,(snapshot)=>{
         const data =snapshot.val();
         let dataObj=Object.assign(data);
         const dataArr=[];
            for (const keys in dataObj) 
             {
                dataArr[keys]=dataObj[keys]
                data[keys]=dataObj[keys]
              }
      
           setData(dataObj);
          })
       
       
       console.log("data:===",data)

      
  
    

      }, []);
  return (
    <div>
    <Adnavbar/>    <h1>HOme</h1>
         <form 
              style={{
                padding: "15px",
                maxHeight:"1000px",
                maxWidth:"90%",
                alignContent:"center",
                justifyContent:"center",
               
                marginTop:"100px",
                 margin:"50px"
                }}
              
              >
                <button 
                style={{
               
                  padding: "15px",
                  maxWidth:"40px",
                  alignContent:"center",
                  justifyContent:"center",
                  background:"blue",
                  
                   
                }}
            
                ></button>
                <table className='styled-table'>
                  <thead>
                    <tr>
                    <th style={{textAlign:"center"}}>NO.</th>
                    <th style={{textAlign:"center"}}>Name.</th>
                    <th style={{textAlign:"center"}}>Email.</th>
                    <th style={{textAlign:"center"}}>Contact.</th>
                    <th style={{textAlign:"center"}}>Action.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(data).map((id, index)=>{
                
                      return(
                        <tr key={id}> 
                           <th scope="row">{index + 1}</th>
                           <td>{data[id].name}</td>
                           <td>{data[id].email}</td>
                           <td>{data[id].contact}</td>
                           <td>
                              <Link to={"AdRooms/",{id}}>
                              <button className="btn btn-edit">Edit</button>
                              </Link>
                            
                              <button data-id={id} className="btn btn-delete"
                               onClick={(e)=> onDelete(e)}>Delete</button>
                               
                          
                              <button className="btn btn-view">View</button>
                             
                           </td>
                        </tr>
                
                      )
                    })}
                  </tbody>
                </table>
           
              </form>
    </div>
  )
}

