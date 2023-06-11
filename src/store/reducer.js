import * as actionTypes from './constants'
const initState = {
  count: 0
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case actionTypes.SUB_NUMBER:
      return { ...state, count: state.count + action.num }
    default:
      return state
  }
}
export default reducer