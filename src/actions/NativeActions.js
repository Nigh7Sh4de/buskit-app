import { Linking } from 'react-native'

var parseUrl = url_string => {
  var result = { params: {} }
  var scheme = url_string.indexOf('buskit.tv/') + 10
  var start = url_string.indexOf('?', scheme)
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

export function listenToLinkingEvents() {
  return async (dispatch, getState) => {
    Linking.addEventListener('url', event => {
      let response = parseUrl(event.url)
      switch(response.destination) {
        case 'redirect':
          return dispatch(gotCode(response.params.code))
        default:
          return dispatch(loginError('Unkonwn linking event'))
      }
    })
  }
}

export function openLink(url) {
  Linking.openURL(url)
}

