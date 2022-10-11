/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../Button/Button'

export default function HeroSection() {
  return (
    <div className='gradientBGG'>
      <div className=' w-10/12 mx-auto'>
        <div className='flex flex-col-reverse lg:flex-row h-screen'>
          <div className='lg:w-6/12 space-y-8 my-auto'>
            <h1 className='text-black text-3xl lg:text-5xl font-semibold '>Digital Transformation <br className='hidden lg:block' /> To Remote Locations</h1>
            <p className='text-grayText'>
              The project was initiated to help curb the security challenges <br className='hidden lg:block' /> 
              and drive the growth of Digitally Specialized Skills in<br className='hidden lg:block' /> 
              Africa through a community based approach.
              
            </p>

            <div>
              <Button text={'Learn More'}/>
              <Button text={'Our Vision'} reverse />
            </div>
          </div>
          <div className='h-[30vh] md:h-full my-auto lg:w-6/12'>
            <img className='' src="/homeimg.png" alt="home image" />
          </div>
        </div>
      </div>
    </div>
  )
}
