import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import persistReducer from 'redux-persist/es/persistReducer'
import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
import appReducer from './appSlice'

let storeRedux

export const makeStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
    stateReconciler: autoMergeLevel2
  }
  const persistedReducer = persistReducer(persistConfig, appReducer)

  storeRedux = configureStore({
    reducer: {
      app: persistedReducer
    },
    // preloadedState:
    devTools: process.env.NEXT_PUBLIC_ENABLE_TOOL_REDUX
  })

  return storeRedux
}

export const persistor = persistStore(makeStore())

export default storeRedux
