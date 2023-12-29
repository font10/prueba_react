import React from 'react'
import { useDispatch } from 'react-redux'
import { changePopUp, setInfoDetail } from '../../redux/slices/streamSlice'

export const ListCardItem = ({item}) => {
  const dispatch = useDispatch()

  const handlePopUp = () => {
    dispatch(changePopUp(true))
    dispatch(setInfoDetail(item))
  }

  return (
    <article 
      key={item?.title} 
      className='my-10 hover:shadow-xl mx-2 bg-gray-50 hover:border-2 hover:border-white hover:opacity-50 hover:transition-all hover:ease-in-out hover:duration-300' 
      onClick={handlePopUp}
    >
      <figure>
        <img src={item?.images['Poster Art']?.url} alt={item?.title} className='cursor-pointer' />
        <figcaption className='p-3'>{item?.title}</figcaption>     
      </figure>
      {}
    </article>
  )
}
