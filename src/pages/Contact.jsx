import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'> Lahore <br /> Punjab, Pakistan</p>
          <p className=' text-gray-500'>Tel: (0606) 000-00000 <br /> Email: safeinofficial@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>"Designed for You, Worn by Many."</p>
          <p className=' text-gray-500'>Designed for you, worn by many—crafted with style and passion.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore SAFEINCLOSET</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
