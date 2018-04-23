import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { Actions, Router, Scene, Stack, Reducer } from 'react-native-router-flux'

// import App from 'src/App.js'
import reducers from 'src/reducers'
import LoginView from 'src/views/LoginView.js'
import HomeView from 'src/views/HomeView.js'
import NavReducer from 'src/reducers/NavReducer';

const navigator = Actions.create(
  <Stack key='root'>
    <Scene key='home' path="/" component={HomeView} title="Home" />
    <Scene key='login' path="/login" component={LoginView} title="Login" />
  </Stack>
)
const ConnectedRouter = connect()(Router)

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducers = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducers, applyMiddleware(thunk))
const persistor = persistStore(store);

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    debugger
    console.log('ACTION:', action);
    return NavReducer(state, action);
  };
};

AppRegistry.registerComponent('Buskit', () => 
  class extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ConnectedRouter createReducer={reducerCreate}>
              <Stack key='root'>
                <Scene key='home' path="/" component={HomeView} title="Home" />
                <Scene key='login' path="/login" component={LoginView} title="Login" />
              </Stack>
            </ConnectedRouter>
          </PersistGate>
        </Provider>
      )
    }
  }
)
