import {configureStore} from '@reduxjs/toolkit'
import countReducer from './modules/count'

const store = configureStore({
  reducer:{
    count: countReducer
  }
  
})

export default store