import React from 'react'

const Svg = () => {
    return(
      <span className='rounded-full bg-mainGreen w-5 h-5'>.
      </span>
    )
  }

export default function Benefits() {
  return (
    <div className='w-9/12 lg:h-screen mx-auto flex flex-col lg:flex-row my-16 lg:my-0 lg:space-x-16'>
    <div className='lg:w-4/12 my-auto'>
        <img className='lg:h-[80%]  object-cover rounded-xl ' src="/project774/f2.jpg" alt="j" />
    </div>
    <div className='lg:w-8/12 lg:h-[70%] mt-6 lg:my-auto'>
        <div className='lg:my-8 lg:w-9/12'>
            <h2 className='text-2xl font-semibold mb-4'>In reality, project 774 ushers in endless <br /> benefits to the
             economy and the people <br /> as we keep evolving.</h2>
            <p className='text-grayText'>{`It's certain, that with all we envision as regards to empowering `}<br />
             {`and stemming innovative youths, we'll reap bountifully.`}</p>
        </div>
        <div className='flex flex-col space-y-6 mt-6 md:mt-0'>
        <ul className='space-y-4 text-grayText'>
            <div className='m-0 p-0 inline' >
                <img className='inline w-2 mb-10 mr-1' src="/project774/e.jpg" alt="" /><li className='inline-block'> Create awareness of issues of Cyber security and <br /> personal data protection.</li>
            </div>
            <div className='m-0 p-0'>
                <img className='inline w-2 mb-10 mr-1' src="/project774/e.jpg" alt="" /><li className='inline-block'>Create employment opportunities for digital jobs <br /> across the country.</li>
            </div>
            <div className='m-0 p-0'>
                <img className='inline w-2 mb-10 mr-1' src="/project774/e.jpg" alt="" /><li className='inline-block'> Develop more community Tech Hubs & expand to <br /> the six LGAs.</li>
            </div>
            <div className='m-0 p-0'>
                <img className='inline w-2 mb-10 mr-1' src="/project774/e.jpg" alt="" /><li className='inline-block'> Provide an enabling environment for productivity <br /> and connectivity.</li>
            </div>
        </ul>
        </div>
    </div>
</div>
  )
}
