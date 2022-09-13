import React from 'react';
import '../../App.css';
import './SignUp.css'
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'

export default function SignUp() {
  
  return (

    <div >
      <div className="Signcontainer">
         <div className='admin'> 
            
            <Link to='/Admin'  className='nav-links'   >
            <h1>Admin</h1>
                    </Link>
            
         </div>
         <div className='admin'> 
         <Link to='/Welcome'  className='nav-links'   >
         <h1>User</h1>
                    </Link>
            
         </div>
         
         
      </div>
    
    </div>
  
  );
}