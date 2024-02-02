import { Modal } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'

const MyModal = () => {
  const modalConfig = useSelector(state => state.app.modal, shallowEqual)
  return (
    modalConfig?.body && (
      <Modal
        title="Basic Modal"
        {...modalConfig}
        maskClosable={modalConfig?.maskClose}
        keyboard={modalConfig?.maskClose}
        style={{
          // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          ...(modalConfig?.style || {})
        }}
        className={`rounded-2xl ${modalConfig?.className}`}
      >
        { modalConfig?.body}
      </Modal>
    )

  )
}

export default MyModal
