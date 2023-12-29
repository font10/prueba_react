import React from 'react'
import { useEffect,  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filter, setTitle } from '../../redux/slices/streamSlice.js'
import { Popup } from '../../components/Popup/Popup.jsx'
import { ListCardItem } from '../../components/ListItem/ListCardItem.jsx'
import { Loading } from '../../components/Loading/Loading.jsx'
import { Error } from '../../components/Error/Error.jsx'

export const Series = () => {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(false);
  const { series, popUpInfoDetail, error } = useSelector(state => state.stream) 

  const filterSeries = () => {
    setisLoading(true)
    dispatch(setTitle('Series'))
    dispatch(filter('series'))
    setTimeout(() => {
      setisLoading(false)
    }, 1500);
  }
  
  useEffect(() => {    
    filterSeries()
  }, []);

  if(isLoading) return <Loading />
  if(error !== '') return <Error />

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
        {
          series.map(serie => (
            <ListCardItem key={serie?.title} item={serie} />
          ))
        }
       
        { popUpInfoDetail && <Popup /> }      
      </section>
    </section>
  )
}
