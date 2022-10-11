import React from 'react'
import Button from '../Button/Button'

export default function Intro() {
  return (
    <div className=' w-10/12 mx-auto my-10 lg:my-20'>
        <div className='flex flex-col lg:flex-row lg:h-48 '>
        <div className='lg:w-6/12  '>
        <h1 className='text-mainGreen text-3xl font-semibold lg:text-center '>Get To know us <hr className='w-40 h-1 bg-mainGreen inline-block' /> </h1>
        <div>

        </div>
        </div>
        <div className='lg:w-6/12  ' >
            <div className='lg:w-10/12 mx-auto space-y-4'>
                <h2 className='text-2xl lg:text-3xl font-semibold '>Introducing Project 774</h2>
                <p className='text-grayText'>To harness digital technologies and innovation to <br className='hidden lg:block' />
                transform remote communities to promote inclusive <br className='hidden lg:block' />
                economic growth for socio-economic development.</p>
                <Button text={'Learn More'} />
            </div>
        </div>
    </div>
    </div>
  )
}
