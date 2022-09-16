import React ,{useState}from 'react'
import './Button.css';
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { signOut} from "firebase/auth";


export function Button() {
  const Navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Link to='/' onClick={handleSignOut}>
      {isEdit ?  (<span  className="add-confirm-icon" onClick={handleSignOut}>sign</span>  ) : 
                        (<button        
                           >Sign-out</button>
                                   )}
                                   
    </Link>
    
  );
  setIsEdit(handleSignOut(true))
}