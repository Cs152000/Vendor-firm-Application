import React from 'react'
import Food from "/foodImg.png"

const Hero = () => {
  return (
    <section className='flex items-center justify-around gap-4 bg-primary h-fit '>
      <div className=' w-1/2 text-white  my-2 h-full font-bold text-5xl pl-20 py-4 '>
     <div>Order Food </div>
     Online In<br/><div className='text-orange-500'>Hyderabad</div>
      </div>
      <div className=' w-1/2 m-2 h-full '>
      <img className='h-[300px]' src={Food} alt="no image"/>
      </div>
    </section>
  )
}

export default Hero
