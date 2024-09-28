import React from 'react'
import "../css/Navbar.css"
import{Link,NavLink} from "react-router-dom"
function Navbar() {
  return (
    <>
         <nav>
              <div className='logo'>
                  <img src="logo.jpg" alt="Logo"  height={"60px"} width={"60px"}/>
              </div>
               <div className="navlinks">
                    <Link to ='/' className='link'>Home</Link>
                    <NavLink  to ='/About' className='link'>About</NavLink>
                    <Link to='/Product'className='link'>Product</Link>
                    <NavLink to='/Cart' className='link'>Cart</NavLink>
               </div>
               <div className='login'>
               <Link to='/Login'><button>Login</button></Link>

               </div>
         </nav>
    </>
  )
}
import { Form } from 'react-router-dom'

export default Navbar