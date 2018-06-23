import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import Thunk from 'redux-thunk'
import Logger from 'redux-logger'

import reducers from 'src/reducers'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducers = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducers, applyMiddleware(Thunk, Logger))
export const persistor = persistStore(store)
export function purgeStore() {
  persistor.purge()

  store.dispatch({
    type: 'REHYDRATE'
  })
}