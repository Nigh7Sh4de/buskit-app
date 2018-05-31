import * as Actions from './'
import {
  Platform
} from 'react-native'

import { openLink } from './NativeActions'

export function gotCode(code) {
  return async (dispatch) => {
    try {
      const codeResponse = await fetch(`http://192.168.2.14:3000/auth/twitch/redirect?code=${code}`)
      const user = await codeResponse.json()
      dispatch(loginSuccess(user))
    }
    catch(err) {
      dispatch(loginError(err))
    }
  }
}

export function login() {
  const url = 'https://id.twitch.tv/oauth2/authorize?client_id=k6zpqqplgc8nyknrnkag6qhfpesc9p&redirect_uri=buskit://buskit.tv/redirect&response_type=code&scope=openid'
  return async dispatch => {
    dispatch(loginLoading())
    if (Platform.OS !== 'web')
      openLink(url)
    else 
      console.log('web login')
  }
}

// export function signOut() {
//     Googlelogin.signOut()
//     return {
//         type: Actions.USER_LOGOUT
//     }
// }

export function loginLoading() {
  return {
    type: Actions.USER_LOGIN_LOADING
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
