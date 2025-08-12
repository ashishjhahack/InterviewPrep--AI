import React from 'react'
import { assets } from '../assests/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* {left section} */}
            <div>
                <p className='flex text-gray-700 font-bold text-2xl whitespace-nowrap mb-1'>InterviewPrep-AI</p>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>"© 2024 Prescripto. All rights reserved. Privacy Policy | Terms of Service | Contact Us. Follow us: Facebook | Twitter | Instagram. Designed with care by Your Team. Powered by MERN Stack."</p>
            </div>

            {/* {center section} */}
            <div>
                <p className='text-xl font-medium mb-5 '>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* {RIght Section } */}
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p> 
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 885134304</li>
                    <li>abc@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* {Copyright Text } */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
