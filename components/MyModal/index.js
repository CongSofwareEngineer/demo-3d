import { Modal } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'

const MyModal = () => {
  const modalConfig = useSelector(state => state.app.modal, shallowEqual)
  return (
    modalConfig?.body && <Modal
      title="Basic Modal"
      {...modalConfig}
      maskClosable={modalConfig?.maskClose}
      keyboard={modalConfig?.maskClose}
      style={{
        ...(modalConfig?.style || {})
      }}
      wrapClassName='bg-red'
      className={`rounded-2xl bg-transparent ${modalConfig?.className}`}
    >
      { modalConfig?.body }
    </Modal>
  )
}

export default MyModal
