import React from 'react'

export const Footer = () => {

  const footerTabs = [
    'Home',
    'Terms and Conditions',
    'Privacy Policy',
    'Collection Statement',
    'Help',
    'Manage Account'
  ]

  return (
    <section className='w-full fixed bottom-0 bg-gray-800'>
      <section className='flex flex-col w-10/12 mx-auto'>
        <div className='flex flex-wrap items-center gap-2'>
        {
          footerTabs.map((tab, index) => (
            <section key={index} className='flex flex-row gap-3 items-center text-white text-[15px] cursor-pointer'>
              { tab.length === index-2 ? tab : tab + '  |  '}
            </section>
          ))
        }
        </div>
        <section className='flex flex-row gap-3 items-center text-white mt-5'>
          <p className='text-[13px] text-gray-300 text-opacity-90'>Copyright© 2016  DEMO streaming. All Rights Reserverd</p>
        </section>

      </section>
    </section>
  )
}
