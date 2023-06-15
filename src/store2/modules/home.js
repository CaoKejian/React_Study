import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchHomeMultidataAction = createAsyncThunk("fetch/homeMultidata", async (extraInfo,{dispatch,getState}) => {
  console.log(extraInfo,dispatch,getState);
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  dispatch(changeBanners(banners))
  dispatch(changeRecommends(recommends))
  // return res.data
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     state.banners = payload.data.banner.list
  //     state.recommends = payload.data.recommend.list
  //   }
  // }
})
export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer