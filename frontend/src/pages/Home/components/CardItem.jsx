import React from 'react'
import { Link } from 'react-router-dom'

export const CardItem = ({category}) => {
  return (
    <Link to={category.path} className='cursor-pointer'>
      <figure className='bg-gray-800 h-52 w-36 flex justify-center items-center'>
        <img src={category.img} alt={category.title} className='w-40 h-28' />
        <figcaption className='absolute text-white text-3xl font-semibold'>{category.title.toUpperCase()}</figcaption>
      </figure>
      <h3 className='text-left text-[15px]'>{category.desc}</h3>
    </Link>
  )
}
