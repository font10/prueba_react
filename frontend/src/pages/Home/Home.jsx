import React, { useEffect } from 'react'
import { categories } from '../../utils/constants'
import { CardItem } from './components/CardItem'
import { useDispatch } from 'react-redux'
import { setTitle } from '../../redux/slices/streamSlice'

export const Home = () => {
  const dispatch = useDispatch()

  const changeTitle = () => {
    dispatch(setTitle('Titles'))
  }

  useEffect(() => {
    changeTitle()
  }, [])

  return (
    <section>
      <section className='flex flex-wrap justify-start gap-8 p-3'>
        {categories.map((category) => (
          <CardItem category={category} key={category.id} />
        ))}
      </section>
    </section>
  )
}
