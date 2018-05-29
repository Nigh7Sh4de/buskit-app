import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk'
import Logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import App from 'src/App.js'
import reducers from 'src/reducers'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducers = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducers, applyMiddleware(Thunk, Logger))
const persistor = persistStore(store)

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