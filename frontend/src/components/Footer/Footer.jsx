import React from 'react'
import { footerTabs, socials, store } from '../../utils/constants'
import facebook from '../../assets/social/facebook-white.svg'

export const Footer = () => {

  return (
    <section className='w-full fixed bottom-0 bg-gray-800'>
      <section className='flex flex-col w-10/12 mx-auto mt-8'>
        <div className='flex flex-wrap items-center gap-2'>
        {
          footerTabs.map((tab, index) => (
            <section key={index} className='flex flex-row gap-3 items-center text-white text-[15px] cursor-pointer'>
              { tab.length === index-2 ? tab : tab + '  |  '}
            </section>
          ))
        }
        </div>
        <section className='flex flex-row gap-3 items-center text-white mt-3'>
          <p className='text-[13px] text-gray-300 text-opacity-90'>Copyright© 2016  DEMO streaming. All Rights Reserverd</p>
        </section>

        <section className='flex flex-row justify-between items-center my-12'>
          <section className='flex flex-row gap-7 items-center '>
            {
              socials.map(social => (
                <figure key={social}>
                  <img src={social?.img} alt="facebook" width={social?.size} />            
                </figure>
              ))
            }
          </section>

          <section className='flex flex-row gap-7 items-center '>
            {
              store.map(store => (
                <figure key={store?.img}>
                  <img src={store?.img} alt="facebook" width={store?.size} />            
                </figure>
              ))
            }
          </section>
        </section>

      </section>
    </section>
  )
}
