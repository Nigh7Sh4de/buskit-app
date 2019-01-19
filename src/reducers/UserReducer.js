import * as Actions from '../actions'

const initialState = {
  data: [],
  filtered_data: null,
  user: null,
  error: null,
  pending: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case Actions.USER_LOGIN_SUCCESS:
      return { ...state,
        user: action.user,
        pending: false
      }
    case Actions.USER_LOGIN_ERROR:
      return { ...state,
        user: null,
        error: action.error,
        pending: false
      }
    case Actions.USER_FETCH_DATA:
      return { ...state,
        data: action.data,
        filtered_data: state.filtered_data || action.data,
      }
    case Actions.FILTER_UPDATED:
      const { filter } = action  
      const filtered_data = state.data.filter(u => u.profile.display_name.toLowerCase().indexOf(filter.text.toLowerCase()) >= 0)
      return { ...state,
        filtered_data,
      }
    case Actions.USER_LOGIN_PENDING:
      return { ...state,
        error: null,
        pending: action.pending
      }
    case Actions.USER_LOGOUT:
      return { ...state,
        user: null,
        pending: false
      }
    default: return state
  }
}