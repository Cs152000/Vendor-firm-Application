import React from 'react'

const UserDetails = () => {
   const vendorId= localStorage.getItem("vendorId")
   const firmId=localStorage.getItem("firmId")
   const firmName=localStorage.getItem("firmName")
  return (
    <div className='bg-primary h-screen mx-auto p-4 '>
        <div className='border border-red-500 bg-secondary text-white flex flex-col justify-center align-center  w-1/2 mx-auto p-4'>
        <p>vendor :{vendorId}</p>
    <p> firmId:{firmId}</p>
    <p> firmId:{firmName}</p>
        </div>
      
    </div>
  )
}

export default UserDetails
