'use client'
import storeRedux from '@/Redux/store'
import { Provider } from 'react-redux'

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={storeRedux}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
