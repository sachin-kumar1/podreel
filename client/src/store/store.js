import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './reducers/audioReducer'

const store = configureStore({
  reducer: {
    audio: audioReducer
  },
});

export default store;
