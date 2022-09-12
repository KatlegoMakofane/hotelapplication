import React ,{useState}from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(){
    const [click,setClick]=useState(false)



    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    const [isEdit, setIsEdit] = useState(true);
   
    return(
        
            <>
              <nav className='navbar'>
                <Link to='' className='navbar-logo' onClick={closeMobileMenu}>
                  EPIC
                  <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/home'  className='nav-links' onClick={closeMobileMenu}  >
                      Home
                    </Link>
                  </li>
                  <li
                    className='nav-item'
                   
                  >
                    <Link
                      to='/about'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      About 
                    </Link>
                   
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/contact-us'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/booking'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Booking
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/profile'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                     Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/'
                      className='nav-links-mobile'
                      onClick={closeMobileMenu}>
                        
                        <button       
                           >dAdd To List</button>           
                      Sign Up
                    </Link>
                  </li>
                </ul>
                <Button />
              </nav>
            </>
          );
        }
        
       
export default Navbar;