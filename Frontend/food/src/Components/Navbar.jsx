import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";

const Navbar = () => {
  const [login,setLogin]=useState(false)
const navigate=useNavigate()
  const loginHandler=()=>{
    setLogin(true);
    navigate("/login")
  }
  return (
    <section className='bg-white shadow-md font-bold text-xl'>
      
     <div className='flex justify-between  mx-2 p-3 cursor-pointer'>
          <div>Suby</div>
          <div className='flex gap-2 items-center'>
          <Link to="/register" className='flex gap-1 items-center'>
          <div><MdPersonAddAlt1 /> </div>
          <div>Register</div></Link>
        <div className='flex gap-1 items-center' onClick={loginHandler}>
          <div><MdPersonOutline /></div>
          <div>SignIn</div></div>
        
          </div>
          </div>
    </section>
  )
}

export default Navbar
