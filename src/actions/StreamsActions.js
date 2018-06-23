import * as actions from './'

import { fetchUsers } from './UserActions'

export function setStreams(streams) {
  return {
    type: actions.STREAMS_FETCH_SUCCESS,
    streams,
  }
}

export function fetchStreams() {
  return async (dispatch, getState) => {
    const response = await fetch(`http://192.168.2.14:3000/streams`, {
      headers: {
        Authorization: `Bearer ${getState().user.user.token}`
      }
    })
    const streams = await response.json()
    dispatch(setStreams(streams.data))
    // dispatch(fetchUsers(streams.data.map(i => i.user_id)))
  }
}