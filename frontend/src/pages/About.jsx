import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Welcome to FashionForward, where fashion meets individuality. We believe that what you wear should reflect who you are, without compromise. Our mission is simple: to provide high-quality, stylish clothing that makes you feel confident, comfortable, and ready to take on the world</p>
        <p>At FashionForward, we're all about creating pieces that blend style with comfort. We carefully select every material to ensure our clothing feels as good as it looks. Our focus is on sustainability, so we strive to create fashion that's not only stylish but also mindful of the planet.

        We are more than just a clothing brand - we're a community of individuals who embrace authenticity and self-expression. We believe in empowering our customers to showcase their unique style with confidence.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At FashionForward, our mission is to redefine fashion by creating clothing that empowers individuals to express their true selves. We are dedicated to offering high-quality, stylish pieces that combine comfort, durability, and sustainability. We believe fashion should be inclusive, offering something for every body and every style.</p>
        <p>We are committed to making clothing that not only looks good but feels good, with fabrics and designs that stand the test of time. Our goal is to inspire confidence and creativity, helping our customers embrace their unique identity through fashion.Join us as we continue to make fashion more personal, accessible, and impactful.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row  text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We source high-grade fabrics and follow strict quality checks to ensure each item meets our standards.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping with us is quick, easy, and hassle-free. From smooth browsing to fast checkout, we have made the whole experience seamless.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Customer satisfaction is our priority. Our dedicated support team ensures every question gets answered and every issue gets resolved quickly and smoothly.</p>
        </div>
      </div>
      <NewsletterBox />
      

    </div>
  )
}

export default About