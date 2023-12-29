import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePopUp } from '../../redux/slices/streamSlice'
import { IoMdCloseCircleOutline } from '../../utils/icons'

export const Popup = () => {
  const { detail } = useSelector(state => state.stream)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(changePopUp(false))
  }

  return (
    <article 
      className='flex flex-col w-72 h-auto items-center gap-5 bg-gray-200 absolute top-[16%] left-[42%] rounded-md'
    >
      <IoMdCloseCircleOutline 
        className='absolute right-3 top-3 text-gray-400 hover:text-gray-300 cursor-pointer' 
        onClick={handleClose}
        size={24} 
      />
      <figure>
        <img src={detail?.images['Poster Art']?.url} alt={detail?.title} className=' w-72 cursor-pointer rounded-tl-md rounded-tr-md' />
      </figure>

      <section className='px-5 pb-5'>
        <h1 className='text-xl font-medium'>{detail?.title}</h1>
        <h3 className='text-sm font-medium text-gray-600'>{detail?.releaseYear}</h3>
        <p className='text-[12px] font-medium text-gray-500 mt-4'>{detail?.description}</p>
      </section>     
    </article>
  )
}
