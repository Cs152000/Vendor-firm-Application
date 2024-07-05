import React,{useState,useEffect} from 'react'
import axios from "axios";

const VendorDetails = () => {
    const [vendors,setVendors]=useState([])
    const VendorHandler=async()=>{
try{
  const response=await axios.get(`https://vercel.com/chandus-projects-1f985674/react-food-application/vendor/all-vendors`)
  const savedResponse=await response.data
  setVendors(savedResponse)
  console.log(savedResponse)
}
catch(error){
    alert("invalid response")
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
    <ul className=' gap-2 grid md:grid-cols-2 sm:grid-cols-1  items-center justify-center my-4 mx-4'>
    {vendors.map((item,index)=>(
       <li className='border border-black bg-white  shadow-lg w-full h-fit px-4 py-2 flex gap-6' key={index}>
        <div className='h-1/2 text-sm font-bold'>
        <p>{item.userName}</p>
        <p>{item._id}</p>
        <div>{item.email}</div>
        </div>
        </li>
    ))}
    </ul>
   )}
    
  </section>
  )
}

export default VendorDetails
