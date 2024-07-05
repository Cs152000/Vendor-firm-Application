import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar' 

const DashBoard = () => {
const navigate=useNavigate()
const firmName=localStorage.getItem("firmName")
  const logoutHandler=(e)=>{
    e.preventDefault()
    //confirm to logout from dashboard
    const confirmed=window.confirm("are you sure to logout?")
    if(confirmed){
    localStorage.clear();
    navigate("/")
    }
    else{
      alert("logout cancelled ")
    }
  }
  return (
    <section className='bg-secondary text-white '>
        <nav className='bg-def'>
         <div  className='flex justify-between mx-2 p-3 cursor-pointer'> 
        <div className='text-2xl font-bold'>Vfood</div>
        <div className='font-bold '>FIRM: {firmName}</div>
        <ul className='flex gap-4 font-bold'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link >Services</Link></li>
          <li onClick={logoutHandler}>Logout</li>
        </ul>
        </div> 
      </nav>
      <Sidebar/>
      
    </section>
  )
}

export default DashBoard
