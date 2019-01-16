import * as actions from './'

const VIDEO_DATA = [
  {
    id: '123',
    title: 'The first video',
    user_id: 'u123',
  }, 
  {
    id: '145',
    title: 'The second video',
    user_id: 'u145',
  },
  {
    id: '197',
    title: 'The third video',
    user_id: 'u197',
  },
  {
    id: '124',
    title: 'The fourth video',
    user_id: 'u124',
  }, 
  {
    id: '146',
    title: 'The fifth video',
    user_id: 'u146',
  },
  {
    id: '198',
    title: 'The sixth video',
    user_id: 'u198',
  },
]

export function setVideos(videos) {
  return {
    type: actions.VIDEOS_FETCH_SUCCESS,
    videos,
  }
}

export function fetchVideos() {
  return async (dispatch, getState) => {
    // const response = await fetch(`http://138.197.147.219:3000/videos`)
    // const data = await response.json()
    // dispatch(setVideos(data.videos))
    dispatch(setVideos(VIDEO_DATA))
  }
}