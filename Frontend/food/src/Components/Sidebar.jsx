import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({productsHandler,addHandler}) => {

  const [loginFirm,showLoginFirm]=useState(true)
  
  useEffect(()=>{
    const firmName=localStorage.getItem("firmName")
    if(firmName){
    showLoginFirm(false)
    }
  })

  return (
    <section className=' border w-48 h-screen  bg-primary text-red-500'>
        <ul>
          {loginFirm ?<Link to="/home/add-firm"><li className='font-semibold text-xl text-center my-2 cursor-pointer'>Add Firms</li></Link>:""}
          <Link to="/home"><li className='font-semibold text-xl text-center my-2 cursor-pointer'onClick={addHandler}>Add Products</li></Link>
          <Link to="/home"><li className='font-semibold text-xl text-center my-2 cursor-pointer' onClick={productsHandler}>All Products</li></Link>
          <Link to="/home/user-details"><li className='font-semibold text-xl text-center my-2 cursor-pointer'>User Details</li></Link>
        </ul>
    </section>
  )
}

export default Sidebar
