import { toast } from 'react-toastify'
import { message, notification } from 'antd'

export const cloneObArr = (data) => JSON.parse(JSON.stringify(data))

export const flattenMessages = (nestedMessages, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}
export const getPersistDataByKey = (key, defaultValue = '') => {
  if (typeof localStorage !== 'undefined') {
    const persistData = JSON.parse(localStorage.getItem('persist:nextjs'))
    return persistData?.[key] ? JSON.parse(persistData[key]) : defaultValue
  }
  return null
}

export const scrollTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const saveDataLocal = (key, data) => {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const getDataLocal = (key) => {
  try {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(key))
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export const showNotification = (
  title = null,
  description = '',
  type = 'open'
) => {
  const params = {
    placement: 'bottomRight',
    className: 'notification-class',
    bottom: 54,
    duration: 5
  }
  if (title) {
    params.message = title
  }
  if (description) {
    params.description = description
  }
  notification[type](params)
}
export const showNotificationError = (errorMessage = '', autoClose = 5000) => {
  toast.error(errorMessage, {
    position: 'bottom-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

export const showNotificationSuccess = (message = '', autoClose = 5000) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}
