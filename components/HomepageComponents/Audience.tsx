/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Audience() {
  return (
    <div className="w-9/12 lg:h-screen mx-auto flex flex-col lg:flex-row my-16 lg:my-0 lg:space-x-16">
      <div className="lg:w-4/12 my-auto max-md:my-6 max-md:order-2">
        <img
          className="object-cover rounded-xl "
          src="https://res.cloudinary.com/tacafrica/image/upload/v1665999386/my_folder/wetransfer_oct_2023/image00096_tr4och.jpg"
          alt="j"
        />
      </div>
      <div className="lg:w-8/12 space-y-6 flex flex-col justify-center">
        <div className='w-full mx-auto xl:mx-0 mt-4'>
          <h2 className="text-xl font-semibold">
            Targeting the right audience and populace
          </h2>
          <p className="text-grayText font-light leading-6">
            Starting out in Abuja, we want to reach the right people.
          </p>
        </div>
        <div className="flex flex-col space-y-6 mt-6 md:mt-0">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 ">
            <div className="md:mr-8 ">
              <img
                className="w-12 h-12"
                src="/project774/Group17.svg"
                alt="icon"
              />
              <h3 className="my-2 font-semibold">774 Local Governments</h3>
              <p className="text-sm text-grayText font-light leading-6">
              Project 774 aims to harness digital technologies and innovation in order to transform remote communities and to promote inclusive economic growth, stimulate job creation, erase the digital divide and eradicate poverty.
              </p>
            </div>
            <div className="md:mr-8">
              <img
                className="w-12 h-12"
                src="/project774/Group16.svg"
                alt="icon"
              />
              <h3 className="my-2 font-semibold">1,167,000+ Youths</h3>
              <p className="text-sm text-grayText font-light leading-6">
              The Youths are the target of this project. By introducing Digital literacy and sports to the youths, we hope to engage them with profitable skills and reduce the rate of cybercrime, Drug abuse and other vices.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 ">
            <div className="md:mr-8">
              <img
                className="w-12 h-12"
                src="/project774/Group14.svg"
                alt="icon"
              />
              <h3 className="my-2 font-semibold">300+ Vocational Schools</h3>
              <p className="text-sm text-grayText font-light leading-6">
              Our training at our different vocational centers are geared towards providing learners with essential skills, enhancing their employability and supporting their personal development, thereby encouraging Innovation. 
              </p>
            </div>
            <div className="md:mr-8">
              <img
                className="w-12 h-12"
                src="/project774/Group15.svg"
                alt="icon"
              />
              <h3 className="my-2 font-semibold">600 Public Schools</h3>
              <p className="text-sm text-grayText font-light leading-6">
              Over 600 million children and adolescents worldwide are unable to attain minimum proficiency levels in reading and digital literacy. Our target is to reach 600 public schools in the next few years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
