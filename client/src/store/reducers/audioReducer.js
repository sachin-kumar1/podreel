import { createSlice } from '@reduxjs/toolkit'

export const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    audioStarted: false,
  },
  reducers: {
    startAudio: (state, action) => {
        state.audioStarted = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { startAudio } = audioSlice.actions

export default audioSlice.reducer