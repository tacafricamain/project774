/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../Button/Button'

export default function HeroSection() {
  return (
    <div className='gradientBGG'>
<section id='home' className=" h-screen overflow-hidden bg-fixed bg-center bg-cover bg-mobileBG lg:bg-desktopBG" style={{backgroundAttachment: 'scroll',}} >
  <div className="h-screen overflow-hidden flex flex-col justify-end " style={{background: 'rgba(0, 0, 0, 0.69)' }} >

    <div className=' w-10/12 mx-auto'>
      <div className='flex flex-col-reverse lg:flex-row h-screen'>
        <div className='lg:w-6/12 space-y-8 my-auto'>
          <h1 className='text-white text-3xl lg:text-5xl font-semibold '>Digital Transformation <br className='hidden lg:block' /> To Remote Locations</h1>
          <p className='text-white'>
          Create an integrated and inclusive Digital <br /> Society that improves the quality of <br /> life of Nigerian citizens in rural communities. 
          </p>

          <div>
            <Button text={'Learn More'}/>
            <Button text={'Our Vision'} reverse />
          </div>
          </div>
          {/* <div className='flex flex-col h-[30vh] md:h-full  lg:w-6/12'>
            <img className='my-auto' src="https://res.cloudinary.com/tacafrica/image/upload/v1660216601/my_folder/youth%20skill%20day/IMG-20220718-WA0014_1_yv8msr.jpg" alt="home image" />
          </div> */}
        </div>
      </div>
  </div>
</section>
    </div>
  )
}
