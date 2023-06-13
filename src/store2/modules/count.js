import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 999
  },
  reducers: {
    addNumber(state, action) {
      const payload = action.payload
      state.count += payload
    },
    subNumber(state, action) {
      const payload = action.payload
      state.count -= payload
    }
  }
})
export const { addNumber, subNumber } = countSlice.actions
export default countSlice.reducer