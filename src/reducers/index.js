import { combineReducers } from 'redux'

import UserReducer from './UserReducer'
import StreamsReducer from './StreamsReducer'

export default combineReducers({
  user: UserReducer,
  streams: StreamsReducer,
})