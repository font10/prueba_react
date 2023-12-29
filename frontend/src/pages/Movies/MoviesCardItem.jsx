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
    <article key={movie?.title} className='my-10' onClick={handlePopUp}>
      <figure>
        <img src={movie?.images['Poster Art']?.url} alt={movie?.title} className='w-40 cursor-pointer' />
        <figcaption>{movie?.title}</figcaption>     
      </figure>
      {}
    </article>
  )
}
