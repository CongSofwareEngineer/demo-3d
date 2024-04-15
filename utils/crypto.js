import crypto from 'crypto-js'

export const encryptData = (value, pinCode = '') => {
  try {
    return crypto.AES.encrypt(value.toString(), pinCode).toString()
  } catch (error) {
    return ''
  }
}

export const decryptData = (value, pinCode = '') => {
  try {
    return crypto.AES.decrypt(value.toString(), pinCode).toString(crypto.enc.Utf8)
  } catch (error) {
    return false
  }
}

export const encodeSHA1 = (string, salt = '') => {
  return crypto.HmacSHA1(string, salt)
}
