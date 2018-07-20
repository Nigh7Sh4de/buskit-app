import * as Actions from './'
import {
  Platform
} from 'react-native'

import { openLink } from './NativeActions'

const USERS_DATA = [
  {
    id: 'u123',
    display_name: 'Awesomesausse',
  },
  {
    id: 'u124',
    display_name: 'Mcpantsface',
  },
]

const LOGIN_DATA = {
  id: 'u666',
  display_name: 'Test User',
}

export function onAuthResponse(response) {
  return async (dispatch) => {
    try {
      // const code = response.get('code')
      // const codeResponse = await fetch(`http://192.168.2.14:3000/auth/twitch/redirect?code=${code}`)
      // const user = await codeResponse.json()
      // dispatch(loginSuccess(user))
      dispatch(loginSuccess(LOGIN_DATA))
    }
    catch(err) {
      dispatch(loginError(err))
    }
  }
}

export function login() {
  // const redirect_uri = 'buskit://buskit.tv/redirect'
  const redirect_uri = 'http://localhost:8080/redirect'
  // const url = 'https://id.twitch.tv/oauth2/authorize?client_id=k6zpqqplgc8nyknrnkag6qhfpesc9p&redirect_uri=buskit://buskit.tv/redirect&response_type=code&scope=openid'
  const url = `https://id.twitch.tv/oauth2/authorize?client_id=k6zpqqplgc8nyknrnkag6qhfpesc9p&redirect_uri=${redirect_uri}&response_type=code&scope=openid`
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
      // const requests = ids.map(id => fetch(`http://192.168.2.14:3000/users/${id}`))
      // const response = await Promise.all(requests)
      // const users = await Promise.all(response.map(i => i.json()))
      // dispatch(setUsers(users.map(i => i.data)))
      dispatch(setUsers(USERS_DATA))
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
    console.log(curUser.id, 'wants to follow', id)
  }
}