import { Modal } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'

const MyModal = () => {
  const modalConfig = useSelector(state => state.app.modal, shallowEqual)
  return (
    (
      <Modal
        title="Basic Modal"
        {...modalConfig}
        maskClosable={modalConfig?.maskClose}
        keyboard={modalConfig?.maskClose}
        style={{
          ...(modalConfig?.style || {})
        }}
        className={`rounded-2xl ${modalConfig?.className}`}
      >
        { modalConfig?.body || <></>}
      </Modal>
    )

  )
}

export default MyModal
