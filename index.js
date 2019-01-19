import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import App from 'src/App.js'


import { store, persistor} from 'src/lib/store'

AppRegistry.registerComponent('Buskit', () => 
  class extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      )
    }
  }
)
AppRegistry.runApplication('Buskit', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
})