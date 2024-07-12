import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/UserComponents/Hero';
import FooterSection from '../Components/UserComponents/FooterSection';
import FirmDetails from '../Components/UserComponents/FirmDetails';


const LandingPage = () => {
  return (
    <div className=' text-white h-fit'>
<Navbar/>
<br/>
<Hero/>
<hr />
<FirmDetails/>
<hr/>
<FooterSection/>
    </div>
  )
}

export default LandingPage
