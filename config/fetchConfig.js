import axios from 'axios'
import { REQUEST_TYPE } from './app'

const fetchConfig = async ({
  url = '',
  body = null,
  isAThu = false,
  method = REQUEST_TYPE.GET,
  isBlob = false,
  isCache = true,
  timeOut = 7000
}) => {
  // const urlFormat = process.env.NEXT_PUBLIC_API_APP + url
  const config = {
    baseURL: process.env.NEXT_PUBLIC_API_APP || 'http://192.168.50.73:3003/',
    url,
    // cache: isCache ? 'force-cache' : 'no-store',
    method,
    headers: {},
    signal: AbortSignal.timeout(timeOut)

  }
  if (body) {
    config.data = body
  }
  if (isAThu) {
    config.headers.AThu = ''
  }

  return await axios.request(config)
    .then(async (response) => {
      return {
        ...(response?.data ?? response),
        messages: 'success'
      }
    })
    .catch((error) => {
      console.error(error)
      return {
        data: null,
        messages: 'fail',
        error
      }
    })
}
export default fetchConfig
