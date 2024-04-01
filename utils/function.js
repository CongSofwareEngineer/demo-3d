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

export const scrollTop = () => {
  if (window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const saveDataLocal = (key, data) => {
  try {
    // eslint-disable-next-line no-undef
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getDataLocal = (key) => {
  try {
    // eslint-disable-next-line no-undef
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
    return null;
  }
};
