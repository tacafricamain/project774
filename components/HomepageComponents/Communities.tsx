import React from 'react'

const Svg = () => {
  return(
    <span className='rounded-full bg-mainGreen w-5 h-5'>
      <svg className="flex-shrink-0 w-5 h-3 text-white inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
    </span>
  )
}

export default function Communities(): JSX.Element {
  return (
    <div className='lg:h-screen bg-backgroundGrey flex justify-center items-center py-12'>
        <div className='flex flex-col lg:flex-row w-10/12 '>
            <div className='lg:w-6/12 space-y-8 flex flex-col h-full self-center justify-center'>
                <h1 className='text-black text-2xl lg:text-4xl font-semibold '>Building up Communities <br className='hidden lg:block' /> that thrives on Innovation.</h1>
                <p className='text-grayText'>Project 774 aims to spark interest and curiosity <br className='hidden lg:block' /> 
                across all local governments of the Nigerian <br className='hidden lg:block' />  society thereby</p>
                <ul className='space-y-4 text-grayText'>
                  <li className='inline-block'><Svg /> Increase adoption of the e-naira digital currency.</li>
                  <li className='inline-block'><Svg /> Create employment opportunities for digital jobs.</li>
                  <li className='inline-block'><Svg /> Increase adoption of the e-naira digital currency.</li>
                </ul>
            </div>
            <div className='w-6/12 m-auto h-full'>
              <img className='mx-auto rounded-xl' src="i.png" alt="p" />
            </div>
        </div>
  </div>
  )
}
