import axios from 'axios'
import { decryptData, encryptData } from './crypto'

const FirebaseAPI = {
  requestBase: async (param = {
    isEncode: false,
    url: '',
    body: null
  }) => {
    try {
      let req = null
      if (param.isEncode) {
        req = await axios.post('/api/api-server', {
          data: encryptData(JSON.stringify(param))
        })
      } else {
        req = await axios.post('/api/api-server', { data: param })
      }
      if (param.isEncode) {
        return {
          data: JSON.parse(decryptData(req.data?.data || req.data || '', process.env.NEXT_PUBLIC_KEY_ENCODE)),
          message: 'success'
        }
      }
      return {
        data: req.data?.data || req.data,
        message: 'success'
      }
    } catch (error) {
      return {
        data: null,
        error: error?.response?.data?.message
      }
    }
  }
}
export default FirebaseAPI
