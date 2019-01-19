import * as actions from 'src/actions'

const initialState = {
  data: [],
  filtered_data: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.STREAMS_FETCH_SUCCESS: 
      return { ...state, 
        data: action.streams, 
        filtered_data: state.filtered_data || action.streams 
      }
    case actions.FILTER_UPDATED:
      const { filter } = action
      const filtered_data = state.data.filter(i => i.title.toLowerCase().indexOf(filter.text.toLowerCase()) >= 0)
      return { ...state, 
        filtered_data,
      }
    default: return state
  }
}