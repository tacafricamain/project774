/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Goals() {
  return (
    <div className=''>
        <div className='text-center my-16'>
            <h3 className='text-black text-2xl font-semibold mb-4'>Key goals Project 774 accomplishes whilst transforming <br />
             Nigeria into a Fully Digital Habitat Ecosystem</h3>
            <p className='text-grayText'>The project is generally designed to accomplish three goals</p>
        </div>
        {/* largeScreens */}
        <div className='hidden lg:flex flex-col lg:flex-row lg:h-[600px] overflow-hidden' >
            <div className='lg:w-4/12 bg-fixed bg-center bg-contain bg-job'>
                <div className=' top-0 left-0 w-full h-screen flex flex-col justify-end ' style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                    <div className='md:mr-8 w-10/12 mx-auto mb-40'>
                        <img className='w-12 h-12 mb-6' src="/project774/Group14.svg" alt="icon" />
                        <h3 className='my-2 font-semibold text-white text-2xl mb-4' >Increased <br /> Job Opportunities</h3>
                        <p className='text-white text-sm'>{`The project will equip youths with 
                        practical skills that would enable them to create jobs for themselves 
                        and others. Moreso, implementation of this project in various communities
                        will result in job opportunities for it's residents. The goal is to 
                        provide 1,000,000 full-time jobs and 2,500,000 part-time jobs`}</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-4/12 bg-fixed bg-center bg-contain bg-enaira'>
            <div className=' top-0 left-0 w-full h-screen flex flex-col justify-end ' style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                    <div className='md:mr-8 w-10/12 mx-auto mb-40'>
                        <img className='w-12 h-12 mb-6' src="/project774/Group17.svg" alt="icon" />
                        <h3 className='my-2 font-semibold text-white text-2xl mb-4' >Increased <br/>eNaira Adoption</h3>
                        <p className='text-white text-sm'>{` Many persons are not aware of the E-Naira, what it is and how it can be used.
                         The project will address this by creating awareness of it and thereafter it's adoption.
                         knowledge of the E-Naira will be embedded in our courses which will ease the process.`}</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-4/12 bg-fixed bg-center bg-contain bg-tech'>
            <div className=' top-0 left-0 w-full h-screen flex flex-col justify-end ' style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                    <div className='md:mr-8 w-10/12 mx-auto mb-40'>
                        <img className='w-12 h-12 mb-6' src="/project774/Group16.svg" alt="icon" />
                        <h3 className='my-2 font-semibold text-white text-2xl mb-4' >Increased <br />Tech Adoption</h3>
                        <p className='text-white text-sm'>All our courses at our Digital Hubs are tech related as well
                         as practical based. Hence, implementation of project 774 will accelerate 
                         technology adoption from the grassroots. This in turn, will drastically 
                         change the way business operate in the rural communities.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* mobile */}
         <div className='overlappingGallery lg:hidden' >
            <div className='overlappingGalleryImg overflow-hidden bg-fixed bg-center bg-cover bg-job'>
                <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-end ' style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                    <div className='md:mr-8 w-10/12 mx-auto mb-40'>
                        <img className='w-12 h-12 mb-6' src="/project774/Group14.svg" alt="icon" />
                        <h3 className='my-2 font-semibold text-white text-4xl mb-4' >Increased Job Opportunities</h3>
                        <p className='text-white text-xl'>{`The project will equip youths with 
                        practical skills that would enable them to create jobs for themselves 
                        and others. Moreso, implementation of this project in various communities
                        will result in job opportunities for it's residents. The goal is to 
                        provide 1,000,000 full-time jobs and 2,500,000 part-time jobs`}</p>
                    </div>
                </div>
            </div>
            <div className='overlappingGalleryImg overflow-hidden bg-fixed bg-center bg-cover bg-enaira'>
                <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-end ' style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                    <div className='md:mr-8 w-10/12 mx-auto mb-40'>
                        <img className='w-12 h-12 mb-6' src="/project774/Group17.svg" alt="icon" />
                        <h3 className='my-2 font-semibold text-white text-2xl mb-4' >Increased eNaira Adoption</h3>
                        <p className='text-white text-sm'>{` Many persons are not aware of the E-Naira, what it is and how it can be used.
                         The project will address this by creating awareness of it and thereafter it's adoption.
                         knowledge of the E-Naira will be embedded in our courses which will ease the process.`}</p>
                    </div>
                </div>
            </div>
            <div className='overlappingGalleryImg overflow-hidden bg-fixed bg-center bg-cover bg-tech'>
                <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-end ' style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                    <div className='md:mr-8 w-10/12 mx-auto mb-40'>
                        <img className='w-12 h-12 mb-6' src="/project774/Group16.svg" alt="icon" />
                        <h3 className='my-2 font-semibold text-white text-2xl mb-4' >Increased Tech Adoption</h3>
                        <p className='text-white text-sm'>All our courses at our Digital Hubs are tech related as well
                         as practical based. Hence, implementation of project 774 will accelerate 
                         technology adoption from the grassroots. This in turn, will drastically 
                         change the way business operate in the rural communities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
