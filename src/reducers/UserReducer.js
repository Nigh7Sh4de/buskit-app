import * as Actions from '../actions'

const initialState = {
  data: [],
  filtered_data: null,
  user: null,
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case Actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false
      }
    case Actions.USER_LOGIN_ERROR:
      return {
        ...state,
        user: null,
        error: action.error,
        loading: false
      }
    case Actions.USER_FETCH_DATA:
      const new_data = action.data.filter(u => !state.data.find(i => i.id === u.id))
      const data = [ ...state.data, ...new_data ]
      return {
        ...state,
        data,
        filtered_data: state.filtered_data || data,
      }
    case Actions.FILTER_UPDATED:
      const { filter } = action  
      const filtered_data = state.data.filter(u => u.display_name.toLowerCase().indexOf(filter.text) >= 0)
      return {
        filtered_data,
      }
    case Actions.USER_LOGIN_LOADING:
      return {
        ...state,
        user: null,
        error: null,
        loading: action.loading
      }
    case Actions.USER_LOGOUT:
      return {
        ...state,
        user: null,
        loading: false
      }
    default: return state
  }
}