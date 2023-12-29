import { useEffect,  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { setTitle } from '../../redux/slices/streamSlice.js'

export const Movies = () => {
  const dispatch = useDispatch()
  const [movies, setMovies] = useState([]);
  const { stream } = useSelector(state => state.stream) 

  const filterMovies = () => {
    dispatch(setTitle('Movies'))
    const filterProgramType = stream.entries.filter(serie => serie.programType === 'movie')
    const filterForRelease = filterProgramType.filter(serie => serie.releaseYear >= 2010)
    setMovies(filterForRelease)
  }
  
  useEffect(() => {
    filterMovies()
  }, []);

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
      {
        movies.slice(0, 19).map(movie => (
          <article key={movie?.id} className='my-10'>
            <figure>
              <img src={movie?.images['Poster Art']?.url} alt={movie?.title} className='w-40 cursor-pointer' />
              <figcaption>{movie?.title}</figcaption>            
            </figure>
          </article>
        ))
      }
      </section>
    </section>
  )
}
