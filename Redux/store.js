import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, REGISTER, PURGE, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import appReducer, { setLanguage } from './appSlice'
import { WHITE_LIST_REDUX } from '@/config/app';

let storeRedux

export const makeStore = () => {
  const isClient = typeof window !== 'undefined';
  const persistConfig = {
    key: 'nextjs',
    storage,
    whitelist: WHITE_LIST_REDUX,
    stateReconciler: autoMergeLevel2
  }

  const persistedReducer = persistReducer(persistConfig, appReducer)

  storeRedux = configureStore({
    reducer: {
      app: persistedReducer
    },
    // preloadedState:
    devTools: process.env.NEXT_PUBLIC_ENABLE_TOOL_REDUX,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  })

  return storeRedux
}

export const persistor = persistStore(makeStore())

export default storeRedux
