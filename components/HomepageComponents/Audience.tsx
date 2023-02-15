/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Audience() {
  return (
    <div className='w-9/12 lg:h-screen mx-auto flex flex-col lg:flex-row my-16 lg:my-0 lg:space-x-16'>
        <div className='lg:w-4/12 my-auto'>
            <img className='lg:h-[80%]  object-cover rounded-xl ' src="/project774/d1.jpg" alt="j" />
        </div>
        <div className='lg:w-8/12 lg:h-[70%] py-4'>
            <div className='lg:my-10 lg:w-9/12'>
                <h2 className='text-2xl font-semibold mb-4'>Targeting the right audience and populace</h2>
                <p className='text-grayText'>Starting out in Abuja, we want to reach the right people.</p>
            </div>
            <div className='flex flex-col space-y-6 mt-6 md:mt-0'>
              <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 '>
                <div className='md:mr-8 '>
                  <img className='w-12 h-12' src="/project774/Group17.svg" alt="icon" />
                  <h3 className='my-2 font-semibold' >774 Local Governments</h3>
                  <p className='text-sm text-grayText'>Project 774 aims to spark interest and curiosity across all local governments of the Nigerian society.</p>
                </div>
                <div className='md:mr-8'>
                  <img className='w-12 h-12' src="/project774/Group16.svg" alt="icon" />
                  <h3 className='my-2 font-semibold' >1,167,000+ Youths</h3>
                  <p className='text-sm text-grayText'>Project 774 aims to spark interest and curiosity across all local governments of the Nigerian society.</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 '>
                <div className='md:mr-8'>
                  <img className='w-12 h-12' src="/project774/Group14.svg" alt="icon" />       
                  <h3 className='my-2 font-semibold'>300+ Vocational Schools</h3>
                  <p className='text-sm text-grayText'>Project 774 aims to spark interest and curiosity across all local governments of the Nigerian society.</p>
                </div>
                <div className='md:mr-8'>
                  <img className='w-12 h-12' src="/project774/Group15.svg" alt="icon" />
                  <h3 className='my-2 font-semibold' >600 Public Schools</h3>
                  <p className='text-sm text-grayText' >Project 774 aims to spark interest and curiosity across all local governments of the Nigerian society.</p>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
