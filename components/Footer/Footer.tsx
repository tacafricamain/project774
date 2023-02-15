import React from 'react'
import Button from '../Button/Button'

const footerLinks = [
  {
    heading : 'Sitemap',
    info: [
      {name: 'About Us', link: '#'},
      {name: 'Get In Touch', link: '#'},
      {name: 'Browse Database', link: '#'},
      {name: 'Blog', link: '#'}
  ]
  },
  {
      heading: 'Company',
      info: [
          {name: 'Blog', link: '#'},
          {name: 'Downloads', link: '#'},
      ]
  },
  {
      heading: 'Resources',
      info: [
          {name: 'Graphics', link: '#'},
          {name: 'Documentation', link: '#'},
      ]
  },
  {
      heading: 'Contact Us',
      info: [
          {name: 'project774.tac@gmail.com', link: 'project774.tac@gmail.com'},
      ],
      socials: [
          {name: 'facebook', link: '#', icon: ''},
          {name: 'twitter', link: '#', icon: ''},
          {name: 'instagram', link: '#', icon: ''},
      ]
  }
]

  type INFO = {
    name: string, link: string ; 
  }

  interface FooterLinkTypes {
    info: INFO[] ; 
    heading: string;
    socials?: {name: string, link: string, icon: string}[];
  }


export default function Footer() : JSX.Element {
  return (
    <div className='h-full bg-backgroundGrey mx-auto'>
      <div className='mx-auto w-10/12 py-20'>
        <div className='flex flex-col lg:flex-row mb-12 lg:mb-24  '>
            <div className='lg:w-9/12 h-full'>
            <h3 className='text-black text-3xl lg:text-4xl font-semibold'>
                Subscribe to our newsletter <br className='hidden lg:block'/>
                and start receiving updates
            </h3>
            </div>
            <div className='lg:w-3/12 h-full flex mt-6 '>
              <Button text={'Submit Your Email'} />
            </div>
        </div>
        <div className='flex flex-col lg:flex-row'  >
          {
            footerLinks.map(({heading, info, socials} : FooterLinkTypes, i ) =>  (
              <div key={heading} className={`flex  ${heading == 'resources' ? 'lg:w-5/12' : 'lg:w-2/12'} mx-auto`}>
                  <div className='mb-4 space-y-4'>
                    <h4 className='font-semibold mb-2'>{heading}</h4>
                        {
                          info.map(( { name, link }: INFO ) => (<p className=' text-grayText' key={name}>{name}</p>))
                        }
                  </div>
                  
              </div>
            ))

          }
        </div>
      </div>
          <div className=' mx-auto flex justify-center pb-12'>
            <div className='w-8/12 flex justify-center border-t-2 pt-4 text-gray-500'>
              <span>All Rights Reserved TAC Africa</span>
            </div>
          </div>
    </div>
  )
}
