import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/sample.json'

const initialState = {
  stream: data,
  title: 'Titles',
  error: '',
  series: [],
  movie: [],
  detail: {},
  popUpInfoDetail: false
}

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    changePopUp: (state, action) => {
      state.popUpInfoDetail = action.payload
    },
    setInfoDetail: (state, action) => {
      state.detail = action.payload
    },
    filter: (state, action) => {
      const filterProgramType = state.stream.entries.filter(serie => serie.programType === action.payload)
      const filterForRelease = filterProgramType.filter(serie => serie.releaseYear >= 2010)
      
      if(filterForRelease.length > 0) {
        state[action.payload] = filterForRelease.slice(0, 20)
        state.error = ''
      }
      else {
        state.error = 'Oops, something went wrong...'
        state.movie = []
        state.series = []
      }
    }
  },
})

export const { setTitle, changePopUp, setInfoDetail, filter } = streamSlice.actions
export default streamSlice.reducer