import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/count'
import homeReducer from './modules/home'

const store = configureStore({
  reducer: {
    count: countReducer,
    home: homeReducer
  }

})

export default store