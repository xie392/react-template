import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import errorCode from './error-code'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 判断有无 token
    // const isToken = (config.headers || {}).isToken === false
    // if (getCookie('TOKEN') && !isToken) {
    //   config.headers['Authorization'] = 'Bearer ' + getCookie('TOKEN')
    // }

    return config
  },
  (error: Error) => Promise.reject(error)
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 获取错误码
    const code = response.data.code || 200
    // 获取错误信息
    const msg = errorCode[code] || response.data.msg || errorCode['default']

    // code 的取值根据后台返回为准
    switch (code) {
      case 200:
        break
      case 401:
        console.log(msg)
        break
      case 403:
        console.log(msg)
        break
      case 404:
        console.log(msg)
        break
      case 503:
        console.log(msg)
        break
      default:
        console.log(msg)

        break
    }

    return response.data
  },
  (error: Error) => Promise.reject(error)
)

export default service
