const { setModal } = require('./appSlice')
const { default: storeRedux } = require('./store')

const ReduxServices = {
  callDispatch: (func) => {
    storeRedux.dispatch(func)
  },
  setCloseModal: () => {
    // const contentModal = document.getElementsByClassName('ant-modal-body')
    // for (let i = 0; i < contentModal.length; i++) {
    //   contentModal[i].innerHTML = '';
    // }
    ReduxServices.callDispatch(setModal(null))
  }
}
export default ReduxServices
