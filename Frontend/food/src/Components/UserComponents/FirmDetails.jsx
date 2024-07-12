import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FirmDetails = () => { 
    const [firms,setFirms]=useState([])
    const Navigate=useNavigate()

    const FirmHandler=async()=>{
try{
  const response=await axios.get(`https://react-food-backend-o6lc.onrender.com/firm/all-firms`)
  const savedResponse=await response.data
  setFirms(savedResponse)
  console.log(savedResponse)
}
catch(error){
    console.log(error)
}}
 useEffect(()=>{
 FirmHandler();
console.log("use effect included to show vendors")
 },[])
 const viewHandler=async()=>{
 console.log(firmId)
 }
  return (
    <section className='bg-primary h-full p-2'>
    <div className=' font-bold text-2xl text-center'>
      All Firms
    </div>
   {firms.length === 0?(
    <p>no firms found</p>
   ):(
    <ul className=' gap-2 grid md:grid-cols-3 sm:grid-cols-1  items-center justify-center my-4 mx-4'>
    {firms.map((item,index)=>(
       <li className='border text-black border-red-600  bg-secondary rounded-md  shadow-lg w-full h-72 px-4 py-2 flex gap-6' key={index}>
        <div className='h-full text-md font-bold p-2'>
        <div className='w-full h-24 '><img className='w-full h-24 hover:transition-all' src={"http://localhost:3001/images/"+item.image} /></div>
        <p className='bg-yellow-400 text-xl px-2 py-1 rounded-md font-bold text-blue-600'>{item.firmName}</p>
        <p>{item.area}</p>
        <p className='h-12'>OFFERS : {item.offer}</p>
        
        <p onClick={viewHandler} className='bg-blue-400 text-white font-bold w-fit  py-1 px-2 rounded-md'>VIEW</p>

        </div>
        </li>
    ))}
    </ul>
   )}
    
  </section>
  )
}
export default FirmDetails
