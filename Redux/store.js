import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, REGISTER, PURGE, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import appReducer, { setLanguage } from './appSlice'
import { SLICES, WHITE_LIST_REDUX } from '@/config/app'
import { getPersistDataByKey } from '@/utils/function'

let storeRedux

export const makeStore = () => {
  // eslint-disable-next-line valid-typeof
  const isClient = typeof window !== undefined
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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
    devTools: !process.env.NEXT_PUBLIC_ENABLE_TOOL_REDUX

  })
  if (isClient) {
    const intlReducerData = getPersistDataByKey(SLICES.local)
    if (intlReducerData) {
      storeRedux.dispatch(setLanguage(intlReducerData))
    }
  }

  return storeRedux
}

export const persistor = persistStore(makeStore())

export default storeRedux
