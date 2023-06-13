import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 999
  },
  reducers:{
    addNumber(state,action){

    },
    subNumber(state,action){

    }
  }
})

export default countSlice.reducer