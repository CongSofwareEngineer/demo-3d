import { setModal } from './appSlice'
import storeRedux from './store'

const ReduxServices = {
  callDispatch: (func) => {
    storeRedux.dispatch(func)
  },
  setCloseModal: () => {
    ReduxServices.callDispatch(setModal(null))
  }
}
export default ReduxServices
