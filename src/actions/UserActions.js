import { Linking } from 'react-native'
import * as Actions from './'


var parseUrl = url_string => {
  var result = { params: {} }
  var scheme = url_string.indexOf('buskit.tv/') + 10
  var start = url_string.indexOf('#', scheme)
  var i = start + 1
  
  result.destination = url_string.substring(scheme, start)
  
  while (i > 1) {
    var eq = url_string.indexOf('=', i)
    var next = url_string.indexOf('&', eq)
    result.params[url_string.substring(i, eq)] = url_string.substring(eq + 1, next < 0 ? url_string.length : next)
    i = next + 1
  }
  return result
}


export function login() {
  const url = 'https://id.twitch.tv/oauth2/authorize?client_id=k6zpqqplgc8nyknrnkag6qhfpesc9p&redirect_uri=https://buskit.tv/redirect&response_type=token+id_token&scope=openid'
  return async dispatch => {
    dispatch(loginLoading())
    Linking.addEventListener('url', event => {
      let response = parseUrl(event.url)
      if (response.destination = 'redirect') {
        dispatch(loginSuccess(response.params))
      }
    })
    Linking.openURL(url)
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

export function loginSuccess(response) {
  return {
    type: Actions.USER_LOGIN_SUCCESS,
    response
  }
}

export function loginError(error) {
  return {
    type: Actions.USER_LOGIN_ERROR,
    error
  }
}
