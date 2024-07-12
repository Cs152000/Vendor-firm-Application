import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('')

  const loginHandler=async(e)=>{
    
      e.preventDefault();
      console.warn(email,password)
      setError(null);
      setMessage('');

      try {
        const response = await axios.post('https://react-food-backend-o6lc.onrender.com/vendor/login', {
          email,
          password
        }); 
        const savedResponse=await response.data
         localStorage.setItem("token",savedResponse.token)
        
        if (localStorage.getItem("token")) {
          setMessage('Login successful!');
          setTimeout(()=>{
            navigate("/home/dashboard")
          },3000)
        }
          const vendorId=savedResponse.vendorId
          localStorage.setItem("vendorId",vendorId)
          const vendorResponse=await axios.get(`http://localhost:3001/vendor/single-vendor/${vendorId}`)
          const vendorData=await vendorResponse.data
        if(vendorData){
          const vendorFirmId=vendorData.vendorFirmId;
          const vendorFirmName=vendorData.vendorFirmName
          localStorage.setItem("firmId",vendorFirmId)
          localStorage.setItem("firmName",vendorFirmName)
        }
          //Handle successful login (e.g., redirect or save token) 
      } catch (error) {
        setError('please try again.');
      }
    };
  
  return (
    <>
    <div className='m-2 p-4 text-white  w-96 border border-rose-400 shadow-2xl align-middle mx-auto'>
    <div className='text-center font-semibold'>Vendor Login</div>
    <hr className="h-px my-2 bg-rose-400 border-0"/>
    <div className=' my-2'>
              <label htmlFor="email" className='block text-base  text-left'>Email</label>
            <input type="email" id="email" className='border py-2 px-1 text-primary w-full' placeholder='Enter Email ID'
           onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="password" className='block text-base  text-left '>Password</label>
            <input type="password" id="password" className='border py-2 px-1 w-full text-primary' placeholder='Enter password'
            onChange={(e)=>{setPassword(e.target.value)}}/>
            <div>
           <button className='bg-blue-500 text-white px-3 py-1 rounded my-2' onClick={loginHandler}>Login</button>
            </div> 
        </div>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  <div className='bg-black text-white font-bold w-fit mx-auto px-3 py-1'><Link to="/" >Back</Link></div>
  </>
)}
export default Login
