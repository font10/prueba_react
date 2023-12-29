import React from 'react'
import { useEffect,  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filter, setTitle } from '../../redux/slices/streamSlice.js'
import { Popup } from '../../components/Popup/Popup.jsx'
import { ListCardItem } from '../../components/ListItem/ListCardItem.jsx'
import { Error } from '../../components/Error/Error.jsx'
import { Loading } from '../../components/Loading/Loading.jsx'

export const Movies = () => {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(false);
  const { movie, popUpInfoDetail, error } = useSelector(state => state.stream) 

  const filterMovies = () => {
    setisLoading(true)
    dispatch(setTitle('Movies'))
    dispatch(filter('movie'))
    setTimeout(() => {
      setisLoading(false)
    }, 1500);
  }
  
  useEffect(() => {    
    filterMovies()
  }, []);

  if(isLoading) return <Loading />
  if(error !== '') return <Error />

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
        {
          movie.map(movie => (
            <ListCardItem key={movie?.title} item={movie} />
          ))
        }
       
        { popUpInfoDetail && <Popup /> }      
      </section>
    </section>
  )
}
