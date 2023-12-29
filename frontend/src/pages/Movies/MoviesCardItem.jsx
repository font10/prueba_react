import React from 'react'
import { useDispatch } from 'react-redux'
import { changePopUp, setInfoDetail } from '../../redux/slices/streamSlice'

export const MoviesCardItem = ({movie}) => {
  const dispatch = useDispatch()

  const handlePopUp = () => {
    dispatch(changePopUp(true))
    dispatch(setInfoDetail(movie))
  }

  return (
    <article 
      key={movie?.title} 
      className='my-10 hover:shadow-xl mx-2 bg-gray-50 hover:border-2 hover:border-white hover:opacity-50 hover:transition-all hover:ease-in-out hover:duration-300' 
      onClick={handlePopUp}
    >
      <figure>
        <img src={movie?.images['Poster Art']?.url} alt={movie?.title} className='cursor-pointer' />
        <figcaption className='p-3'>{movie?.title}</figcaption>     
      </figure>
      {}
    </article>
  )
}
