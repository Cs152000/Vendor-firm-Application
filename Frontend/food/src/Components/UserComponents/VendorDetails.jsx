import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const VendorDetails = () => {
    const [vendors,setVendors]=useState([])
    const VendorHandler=async()=>{
try{
  const response=await axios.get(`https://react-food-backend-o6lc.onrender.com/vendor/all-vendors`)
  const savedResponse=await response.data
  setVendors(savedResponse)
  console.log(savedResponse)
}
catch(error){
    console.log(error)
}}
 useEffect(()=>{
  VendorHandler();
console.log("use effect included to show vendors")
 },[])
  return (
    <section className='bg-purple-600 h-full p-2'>
    <div className='text-white font-bold text-2xl text-center'>
      All Vendors
    </div>
   {vendors.length === 0?(
    <p>no vendors found</p>
   ):(
    <ul className=' gap-2 grid md:grid-cols-3 sm:grid-cols-1  items-center justify-center my-4 mx-4'>
    {vendors.map((item,index)=>(
       <li className='border border-red-600  bg-primary rounded-md  shadow-lg w-full h-24 px-4 py-2 flex gap-6' key={index}>
        <div className='h-1/2 text-md font-bold'>
        <p>{item.username}</p>
        <p>{item._id}</p>
        <div>contact: <Link className='text-blue-500'>{item.email}</Link></div>
        <div>{item.firm.firmName}</div>
        </div>
        </li>
    ))}
    </ul>
   )}
    
  </section>
  )
}

export default VendorDetails
