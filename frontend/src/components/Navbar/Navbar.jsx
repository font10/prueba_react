import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const { title } = useSelector(state => state.stream)

  return (
    <section>
      <nav className='bg-blue-500 w-full px-20'>
        <section className='flex flex-row items-center justify-between h-20 shadow-lg'>
          <header>
            <h1 className="text-3xl font-bold text-white">
              DEMO STREAMING
            </h1>
          </header>
          <section className='flex flex-row gap-10'>
            <button className='font-medium text-white text-lg'>Log in</button>
            <button className='bg-gray-800 text-lg font-medium text-white px-4 py-2'>Start your free trial</button>
          </section>
        </section>
      </nav>
      <nav className='bg-gray-800 w-full px-20'>
        <section className='flex flex-row items-center justify-between h-16'>
          <header>
            <h1 className="text-xl font-semibold text-white">
              Popular {title}
            </h1>
          </header>
          </section>
      </nav>
    </section>
  ) 
}
