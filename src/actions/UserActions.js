import * as Actions from './'
import {
  Platform
} from 'react-native'

import { openLink } from './NativeActions'

// const USERS_DATA = [
//   {
//     id: 'u123',
//     display_name: 'Awesomesausse',
//   },
//   {
//     id: 'u124',
//     display_name: 'Mcpantsface',
//   },
// ]

// const LOGIN_DATA = {
//   id: 'u666',
//   display_name: 'Test User',
// }

export function onAuthResponse(response) {
  return async (dispatch) => {
    try {
      const code = response.get('code')
      const codeResponse = await fetch(`https://api.buskit.live/auth/twitch/redirect?code=${code}`, {
        mode: 'cors',
      })
      const user = await codeResponse.json()
      dispatch(loginSuccess(user))
    }
    catch(err) {
      dispatch(loginError(err))
    }
  }
}

export function login() {
  const redirect_uri = 'https://www.buskit.live/redirect'
  const url = `https://id.twitch.tv/oauth2/authorize?client_id=zeod52e6vf639p7ztytpuekmyucm2n&redirect_uri=${redirect_uri}&response_type=code&scope=openid`
  return async dispatch => {
    dispatch(loginPending())
    if (Platform.OS !== 'web')
      openLink(url)
    else 
      openLink(url)
  }
}

export function logout() {
    return {
        type: Actions.USER_LOGOUT
    }
}

export function loginPending(pending = true) {
  return {
    type: Actions.USER_LOGIN_PENDING,
    pending,
  }
}

export function loginSuccess(user) {
  return {
    type: Actions.USER_LOGIN_SUCCESS,
    user
  }
}

export function loginError(error) {
  console.error(error)
  return {
    type: Actions.USER_LOGIN_ERROR,
    error
  }
}

export function setUsers(data = []) {
  return {
    type: Actions.USER_FETCH_DATA,
    data,
  }
}

export function fetchUsers(ids = []) {
  return async dispatch => {
    try {
      dispatch(loginPending())
      const users = await fetch(`https://api.buskit.live/users`, {
        mode: 'cors',
      })
      const data = await users.json()
      dispatch(setUsers(data.users))
    }
    catch(err) {
      console.error(err)
    }
    finally {
      dispatch(loginPending(false))
    }
  }
}

export function followUser(id) {
  return async (dispatch, getState) => {
    const curUser = getState().users.user
    //some endpoint request to follow the user
    console.log(curUser._id, 'wants to follow', id)
  }
}