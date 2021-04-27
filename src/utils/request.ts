import axios from 'axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getStore } from './localStore'

const service = axios.create({
  baseURL: '',
  timeout: 5000, // request timeout
})
// 发起请求之前的拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 如果有token 就携带tokon
    const token = getStore('Authorization')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.data.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
