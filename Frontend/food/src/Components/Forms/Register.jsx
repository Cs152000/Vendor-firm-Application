import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Register = () => { 
  const navigate=useNavigate()
  const [username,setUsername]=useState(" ")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');


  const registerHandler=async(e)=>{
  e.preventDefault();
  setError(null);
  setMessage('');
  
  try {
    const response = await axios.post('https://react-food-backend-o6lc.onrender.com/vendor/register', {
username,email,password
    });
    
    if (response.data) {
      setMessage('Registration successful!');
      console.log(response.data)
      setTimeout(()=>{
        navigate("/login")
      },3000)
      // Handle successful login (e.g., redirect or save token)
    } 
  } catch (error) {
    setError('An error occurred. Please try again later.');
    console.log(error)
  }
};
  return (
    <>
    <div className='m-2 p-4 w-96 border border-rose-400  shadow-2xl align-middle mx-auto'>
    <div className='text-center font-semibold'>Vendor Register</div>
    <hr className="h-px my-2 bg-rose-400 border-0"/>
    <div className=' my-2  '>
      
    <label htmlFor="username" className='block text-base  text-left'>Username</label>
            <input type="username" id="username" className='border py-2 px-1 w-full' placeholder='Enter username'
            onChange={(e)=>{setUsername(e.target.value)}}/>
              <label htmlFor="email" className='block text-base  text-left'>Email</label>
            <input type="email" id="email" className='border py-2 px-1 w-full' placeholder='Enter Email ID'
           onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="password" className='block text-base  text-left'>Password</label>
            <input type="password" id="password" className='border py-2 px-1 w-full' placeholder='Enter password'
             onChange={(e)=>{setPassword(e.target.value)}}/>
            <div>
            <button onClick={registerHandler} className='bg-blue-500 text-white px-3 py-1 rounded my-2'>Submit</button>
            </div> 
        </div>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  <div className='bg-black text-white font-bold w-fit mx-auto px-3 py-1'><Link to="/" >Back</Link></div>
  </>
)
}


export default Register
