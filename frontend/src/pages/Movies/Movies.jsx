import { useEffect,  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { filter, setTitle } from '../../redux/slices/streamSlice.js'
import { Popup } from '../../components/Popup/Popup.jsx'
import { ListCardItem } from '../../components/ListItem/ListCardItem.jsx'

export const Movies = () => {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(false);
  const { movie, popUpInfoDetail, error } = useSelector(state => state.stream) 

  const filterMovies = () => {
    setisLoading(true)
    try {
      dispatch(setTitle('Movies'))
      dispatch(filter('move'))
    } catch (error) {

    }
    setTimeout(() => {
      setisLoading(false)
    }, 1500);
  }
  
  useEffect(() => {    
    filterMovies()
  }, []);

  if(isLoading) return <h1 className='font-medium'>Loading...</h1>
  if(error) return <h1 className='font-medium'>{error}</h1>

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
      {
        movie.map(movie => (
          <ListCardItem item={movie} />
        ))
      }
       
       { popUpInfoDetail && <Popup /> }      
      </section>
    </section>
  )
}
