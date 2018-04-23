import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import NavReducer from './NavReducer'

export default combineReducers({
  user: UserReducer,
  nav: NavReducer,
})