import { SLICES } from '@/config/app'
import { setLanguage, setModal } from './appSlice'
import storeRedux from './store'

const ReduxServices = {
  callDispatch: (func) => {
    storeRedux.dispatch(func)
  },
  setLanguage: (language) => {
    ReduxServices.callDispatch(setLanguage(language))
  },
  getReduxDataByKey: (reducerName, defaultValue = '') => {
    try {
      const storeData = storeRedux.getState()
      return storeData?.app?.[reducerName] || defaultValue
    } catch (error) {
      return defaultValue
    }
  },
  getPersistDataByKey: (key, defaultValue = '') => {
    if (typeof localStorage !== 'undefined') {
      const { app: persistData } = JSON.parse(localStorage.getItem('persist:nextjs'))
      return persistData?.[key] ? JSON.parse(persistData[key]) : defaultValue
    }
    return null
  }
}
export default ReduxServices
