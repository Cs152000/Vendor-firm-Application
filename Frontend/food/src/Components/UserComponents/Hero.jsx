import React from 'react'
import Food from "/foodImg.png"

const Hero = () => {
  return (
    <section className='flex items-center justify-around gap-4 bg-fourth h-fit my-1'>
      <div className=' w-1/2 my-2 h-full font-bold text-4xl flex justify-center py-4'>
     Order Food<br/> Online In <br/>Hyderabad
      </div>
      <div className=' w-1/2 m-2 h-full '>
      <img className='h-[300px]' src={Food} alt="no image"/>
      </div>
    </section>
  )
}

export default Hero
