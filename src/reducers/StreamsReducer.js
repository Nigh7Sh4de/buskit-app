import * as actions from 'src/actions'

const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.STREAMS_FETCH_SUCCESS: 
      return { ...state, data: action.streams }
    default: return state
  }
}