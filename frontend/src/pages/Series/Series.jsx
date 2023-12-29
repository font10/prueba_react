import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { setTitle } from '../../redux/slices/streamSlice'

export const Series = () => {
  const dispatch = useDispatch()
  const [series, setSeries] = useState([])
  const { stream } = useSelector(state => state.stream) 

  const filterSeries = () => {
    dispatch(setTitle('Series'))
    const filterProgramType = stream.entries.filter(serie => serie.programType === 'series')
    const filterForRelease = filterProgramType.filter(serie => serie.releaseYear >= 2010)
    setSeries(filterForRelease)
  }

  useEffect(() => {
    filterSeries()
  }, []);

  return (
    <section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
      {
        series.slice(0, 19).map(serie => (
          <article key={serie?.id} className='my-10 hover:border-2 hover:border-white'>
            <figure>
              <img src={serie?.images['Poster Art']?.url} alt={serie?.title} className='w-40 bg-opacity-35 transition-all duration-200 cursor-pointer' />
              <figcaption>{serie?.title}</figcaption>            
            </figure>
          </article>
        ))
      }
      </section>
    </section>
  )
}
