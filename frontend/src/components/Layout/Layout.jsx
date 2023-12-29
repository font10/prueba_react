import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Layout = ({children}) => {
  return (
    <section className={'flex flex-row min-h-screen w-full'}>            
      <div className='flex flex-col w-full overflow-y-auto h-screen'>
        <Navbar />
        <div className="flex-1 w-10/12 mx-auto mt-10 bg-white">
          {children}
        </div>
        <Footer textColor='text-gray-900' />
      </div>
    </section>
  )
}
