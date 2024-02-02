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
  const persistData = JSON.parse(localStorage.getItem('persist:nextjs'))
  return persistData?.[key] ? JSON.parse(persistData[key]) : defaultValue
}
