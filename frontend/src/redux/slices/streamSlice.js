import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/sample.json'

const initialState = {
  stream: data,
  title: 'Titles',
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
    }
  },
})

export const { setTitle, changePopUp, setInfoDetail } = streamSlice.actions
export default streamSlice.reducer