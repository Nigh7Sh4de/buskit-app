import * as Actions from '../actions'

const initialState = {
  data: [],
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
      const data = action.data.filter(i => state.data.find(j => j.id !== i.id))
      return {
        ...state,
        data: [...state.data, data],
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