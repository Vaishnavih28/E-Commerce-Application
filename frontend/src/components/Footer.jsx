import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-black'>
                We are all about creating fashion that speaks to your individuality.
                Whether you are keeping it casual or pushing the limits, we’ve got you covered.
                At FashionForward, we fuse comfort, style, and culture into every piece.
                Explore our collections, and find your new favorite look today.
                Join us on this journey of self-expression through fashion.
                </p>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8787878787</li>
                <li>contact@fashionforward.com</li>

              </ul>
            </div>

            
        </div>
        <div>
          <hr className='text-gray-300' />
          <p className='py-5 text-sm text-center'>Copyright 2025@ fashionforward.com - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer