import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-red-500 text-white h-screen  text-2xl font-bold flex justify-center items-center flex-col'>
      <Link className='underline' to="/">
      Go Back</Link>
      <h1>404</h1>
      <div>PAGE NOT FOUND</div>
    </div>
  )
}
export default NotFound
