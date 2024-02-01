import { Modal } from 'antd'
import { useSelector } from 'react-redux'

const MyModal = () => {
  const modalConfig = useSelector(state => state.app.modal)
  return (
    // <Modal title="Basic Modal" open >
    //   <p>Some contents...</p>
    //   <p>Some contents...</p>
    //   <p>Some contents...</p>
    //   {
    //     modalConfig?.body
    //   }
    // </Modal>
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
