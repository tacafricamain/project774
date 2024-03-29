/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Svg = () => {
    return(
      <span className='rounded-full bg-mainGreen w-5 h-5'>.
      </span>
    )
  }

export default function Benefits() {
  return (
    <div className="w-9/12 lg:h-screen mx-auto flex flex-col lg:flex-row my-16 lg:my-0 lg:space-x-16">
      <div className="lg:w-4/12 flex justify-center items-center">
        <img
          className="lg:h-[80%]  object-cover rounded-xl "
          src="/project774/f2.jpg"
          alt="j"
        />
      </div>
      <div className="w-full flex flex-col justify-center mx-auto lg:w-8/12">
        <div className="my-6 max-lg:my-12 w-full">
          <h2 className="text-xl font-semibold mb-4">
            In reality, project 774 ushers in endless  benefits to the
            economy and the people as we keep evolving.
          </h2>
          <p className="text-grayText font-light leading-6">
            {`It's certain, that with all we envision as regards to empowering `}
            {`and stemming innovative youths, we'll reap bountifully.`}
          </p>
        </div>
        <div className="flex flex-col space-y-6 mt-6 md:mt-0">
          <ul className="text-grayText flex w-full flex-wrap gap-8 ml-6 max-sm:ml-1">
            <div className="max-w-sm basis-80">
              <li className="flex items-center justify-center font-light leading-6">
                <img
                  className="inline w-2 mr-4"
                  src="/project774/e.jpg"
                  alt=""
                />
                Create awareness of issues of Cyber security and personal data
                protection.
              </li>
            </div>
            <div className="max-w-sm basis-80">
              <li className="flex items-center justify-center font-light leading-6">
                <img
                  className="inline w-2 mr-4"
                  src="/project774/e.jpg"
                  alt=""
                />
                Create employment opportunities for digital jobs across the
                country.
              </li>
            </div>
            <div className="max-w-sm basis-80">
              <li className="flex items-center justify-center font-light leading-6">
                <img
                  className="inline w-2 mr-4"
                  src="/project774/e.jpg"
                  alt=""
                />
                Develop more community Tech Hubs & expand to the six LGAs.
              </li>
            </div>
            <div className="max-w-sm basis-80">
              <li className="flex items-center justify-center font-light leading-6">
                {" "}
                <img
                  className="inline w-2 mr-4"
                  src="/project774/e.jpg"
                  alt=""
                />
                Provide an enabling environment for productivity and
                connectivity.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
