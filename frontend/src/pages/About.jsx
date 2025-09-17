import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLaterBox from '../components/NewsLaterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Forever was born out of a passion for innovation and a desire to resolution the way perople shop online. our journey begin with a simple idea: to discover, explore, and purchse a wide range of products from the comfert of their homes.</p>
           <p>since our inceptions we have worked tirelessy to create a diverse selection of high quanlity product that cater to every taste and preference from fashion and beauti to home essentials we offer a extensive collection sourced from trusted brands and suppliers.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>our mission at Forever is to empower customer with choice, conveninece, and confident we are dedicated to provide a seamless dhopping experinces that exceed expectation</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringet quality Standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping,has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>our team are dedicated professionals is here to assists you to way, ensuring your satisfaction is our top priority</p>
        </div>
      </div>
      <NewsLaterBox/>
    </div>
  )
}

export default About
