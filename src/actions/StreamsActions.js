import * as actions from './'

// const STREAM_DATA = [
//   {
//     id: '123',
//     title: 'The first stream',
//     user_id: 'u123',
//   }, 
//   {
//     id: '145',
//     title: 'The second stream',
//     user_id: 'u145',
//   },
//   {
//     id: '197',
//     title: 'The third stream',
//     user_id: 'u197',
//   },
//   {
//     id: '124',
//     title: 'The fourth stream',
//     user_id: 'u124',
//   }, 
//   {
//     id: '146',
//     title: 'The fifth stream',
//     user_id: 'u146',
//   },
//   {
//     id: '198',
//     title: 'The sixth stream',
//     user_id: 'u198',
//   },
// ]

export function setStreams(streams) {
  return {
    type: actions.STREAMS_FETCH_SUCCESS,
    streams,
  }
}

export function fetchStreams() {
  return async (dispatch, getState) => {
    const response = await fetch(`https://api.buskit.live/streams`)
    const data = await response.json()
    dispatch(setStreams(data.streams))
  }
}

export function tagStream(stream, tags) {
  return async (dispatch, getState) => {
    await fetch(`https://api.buskit.live/streams/${stream.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        tags,
      })
    })
    
    await dispatch(fetchStreams())
  }
}