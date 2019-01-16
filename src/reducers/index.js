import { combineReducers } from 'redux'

import UserReducer from './UserReducer'
import StreamsReducer from './StreamsReducer'
import VideosReducer from './VideosReducer'

export default combineReducers({
  users: UserReducer,
  streams: StreamsReducer,
  videos: VideosReducer,
})