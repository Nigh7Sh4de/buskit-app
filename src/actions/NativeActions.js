import { 
  Linking,
  Platform,
} from 'react-native'

export function listenToLinkingEvents() {
  return async (dispatch, getState) => {
    Linking.addEventListener('url', event => {
      let response = URL(event.url)
      switch(response.pathname) {
        case '/redirect':
          return dispatch(onAuthResponse(response.searchParams))
        default:
          return dispatch(loginError('Unkonwn linking event'))
      }
    })
  }
}

export function openLink(url) {
  if (Platform.OS === 'web') {
    window.open(url, '_self')
  }
  else {
    Linking.openURL(url)
  }
}

