import * as actionTypes from './constants'
const initState = {
  count: 0,
  banners: [],
  recommends: []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case actionTypes.SUB_NUMBER:
      return { ...state, count: state.count + action.num }
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case actionTypes.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}
export default reducer