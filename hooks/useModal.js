import { setModal } from '@/Redux/appSlice'
import ReduxServices from '@/Redux/service'
import { useCallback } from 'react'

import { useDispatch } from 'react-redux'

const useModal = () => {
  const dispatch = useDispatch()
  const openModal = useCallback(({
    body = null,
    width = '500px',
    className = '',
    header = true,
    footer = false,
    maskClose = false,
    onCancel = null,
    closeIcon = true,
    title = '',
    option = {}
  }) => {
    const propsModal = {
      body,
      width,
      className,
      header,
      footer,
      maskClose,
      onCancel: () => onCancel || ReduxServices.setCloseModal(),
      closeIcon,
      title,
      ...option,
      open: true
    }
    dispatch(setModal(propsModal))
  },
  []
  )
  const closeModal = useCallback(() => {
    ReduxServices.setCloseModal()
  },
  []
  )
  return {
    openModal,
    closeModal
  }
}

export default useModal
