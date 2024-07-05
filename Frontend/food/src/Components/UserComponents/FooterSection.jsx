import React from 'react'

const FooterSection = () => {
  return (
    <section className='bg-def  font-bold h-48 flex gap-6 items-center justify-center'>
     <div>
Company
<ul className='text-sm leading-6'>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
        </ul>
     </div>
     <div>Contact Us
        <ul className='text-sm leading-6'>
            <li>Help&Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
        </ul>
     </div>
    </section>
  )
}

export default FooterSection
