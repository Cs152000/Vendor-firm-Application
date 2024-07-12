import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar' 
import AllProducts from '../Components/AllProducts'
import AddProducts from '../Components/Forms/AddProducts'

const DashBoard = () => {
  const[products,setProducts]=useState(false)
  const[addProducts,setAddProducts]=useState(false)

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
  const productsHandler=()=>{
    setProducts(true)
    setAddProducts(false)
  }
  const addHandler=()=>{
    setAddProducts(true)
    setProducts(false)
  }
  return (
    <section className='bg-secondary '>
        <nav className='bg-primary fixed w-full text-white'>
         <div  className='flex justify-between mx-2 p-3 cursor-pointer'> 
        <div className='text-xl font-bold'>Vfood</div>
        <div className='font-bold '>FIRM: {firmName}</div>
        <ul className='flex gap-4 font-bold'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link >Services</Link></li>
          <li onClick={logoutHandler}>Logout</li>
        </ul>
        </div> 
      </nav>
      <br/>
      <div className='flex mt-7 h-screen justify-between '>
      <Sidebar productsHandler={productsHandler} addHandler={addHandler}/>
      {products && <AllProducts/>}
      {addProducts && <AddProducts/>}
      </div>
    </section>
  )
}

export default DashBoard
