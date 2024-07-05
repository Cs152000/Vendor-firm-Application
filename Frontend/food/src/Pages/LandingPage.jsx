import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/UserComponents/Hero';
import FooterSection from '../Components/UserComponents/FooterSection';
import VendorDetails from '../Components/UserComponents/VendorDetails';


const LandingPage = () => {
  return (
    <div className='bg-secondary h-screen'>
<Navbar/>
<Hero/>
<VendorDetails/>
<FooterSection/>
    </div>
  )
}

export default LandingPage
