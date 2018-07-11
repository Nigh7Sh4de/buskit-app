import * as actions from './'

import { fetchUsers } from './UserActions'

const STREAM_DATA = [
  {
    id: '123',
    title: 'The first stream',
    user_id: 'someuser',
  }, 
  {
    id: '145',
    title: 'The second stream',
    user_id: 'someotheruser',
  },
  {
    id: '197',
    title: 'The third stream',
    user_id: 'somethirduser',
  },
]

export function setStreams(streams) {
  return {
    type: actions.STREAMS_FETCH_SUCCESS,
    streams,
  }
}

export function updateFilter(filter) {
  return {
    type: actions.STREAMS_FILTER_UPDATED,
    filter,
  }
}

export function fetchStreams() {
  return async (dispatch, getState) => {
    // const response = await fetch(`http://192.168.2.14:3000/streams`, {
    //   headers: {
    //     Authorization: `Bearer ${getState().user.user.token}`
    //   }
    // })
    // const streams = await response.json()
    // dispatch(setStreams(streams.data))
    dispatch(setStreams(STREAM_DATA))
  }
}