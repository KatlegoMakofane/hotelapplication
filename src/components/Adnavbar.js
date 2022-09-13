
import React ,{useState}from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Adnavbar.css'

function Adnavbar() {
    const [click,setClick]=useState(false)



    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    const [isEdit, setIsEdit] = useState(true);
   
    return(
        
            <>
              <nav className='navbar'>
                <Link to='' className='navbar-logo' onClick={closeMobileMenu}>
                  EPIC
                  <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/AdBookings'  className='nav-links' onClick={closeMobileMenu}  >
                      Booking
                    </Link>
                  </li>
                  <li
                    className='nav-item'
                   
                  >
                    <Link
                      to='/AdUsers'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Users
                    </Link>
                   
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/AdRooms'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Rooms
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      to='/'
                      className='nav-links-mobile'
                      onClick={closeMobileMenu}>
                        
                        <button >Sign Up</button>           
                      Sign Up
                    </Link>
                  </li>
                </ul>
                <Button />
              </nav>
            </>
          );
        }

export default Adnavbar