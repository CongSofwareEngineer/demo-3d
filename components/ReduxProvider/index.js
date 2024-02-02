'use client'
import storeRedux, { persistor } from '@/Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={storeRedux}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>

    </Provider>
  )
}

export default ReduxProvider
