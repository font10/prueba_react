import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/sample.json'

const initialState = {
  stream: data,
  series: [],
  status: "idle",
  error: null,
  title: 'Titles'
}

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setSeries: (state, action) => {
      state.series = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    }
  },
})

export const { setSeries, setTitle } = streamSlice.actions
export default streamSlice.reducer