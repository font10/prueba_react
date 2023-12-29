import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Popup } from '../../components/Popup/Popup'
import { ListCardItem } from '../../components/ListItem/ListCardItem'
import { setTitle } from '../../redux/slices/streamSlice'

export const Series = () => {
  const dispatch = useDispatch()
  const { series, popUpInfoDetail } = useSelector(state => state.stream) 

  const changeTitle = () => {
    dispatch(setTitle('Series'))
  }

  useEffect(() => {
    changeTitle()
  }, [])

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
      { series.map(serie => (     
          <ListCardItem key={serie?.title} item={serie} />
        ))}

      { popUpInfoDetail && <Popup /> } 
      </section>
    </section>
  )
}
