import axios from 'axios'
import { decryptData, encryptData } from './crypto'

const FirebaseAPI = {
  requestBase: async (param = {
    isEncode: false,
    namFn: '',
    nameDB: '',
    body: {
      data: '',
      id: '',
      queryData: {
        key: '',
        match: '',
        value: ''
      },
      queryListData: [
        { key: '', match: '', value: '' }
      ]
    }
  }) => {
    try {
      let req = null
      if (param.isEncode) {
        req = await axios.post('/api/api-client', {
          data: encryptData(JSON.stringify(param), process.env.NEXT_PUBLIC_KEY_ENCODE)
        })
      } else {
        req = await axios.post('/api/api-client', { data: param })
      }
      if (param.isEncode) {
        const dataDecode = decryptData(req.data?.data, process.env.NEXT_PUBLIC_KEY_ENCODE)
        return {
          data: JSON.parse(dataDecode),
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
