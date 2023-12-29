import { useEffect,  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { setTitle } from '../../redux/slices/streamSlice.js'
import { MoviesCardItem } from './MoviesCardItem.jsx'
import { Popup } from '../../components/Popup/Popup.jsx'

export const Movies = () => {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const { stream, popUpInfoDetail } = useSelector(state => state.stream) 

  const filterMovies = () => {
    setTimeout(() => {
      dispatch(setTitle('Movies'))
      const filterProgramType = stream.entries.filter(serie => serie.programType === 'movie')
      const filterForRelease = filterProgramType.filter(serie => serie.releaseYear >= 2010)
      setMovies(filterForRelease)
    }, 2000);
  }
  
  useEffect(() => {    
    setisLoading(true)
    filterMovies()
    setisLoading(false)
  }, []);

  console.log(movies)
  if(isLoading) return (
    <div className='text-2xl font-bold text-blue-500'>
      Hola
    </div>
  )

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
      {
        movies.slice(0, 19).map(movie => (
          <MoviesCardItem movie={movie} />
        ))
      }
       
       { popUpInfoDetail && <Popup /> }      
      </section>
    </section>
  )
}
