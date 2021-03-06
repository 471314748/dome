import axios from 'axios'
import { getLocal } from './mylocal.js'

// 创建axios副本
var instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  // 跨域携带token
  // withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 请求拦截器中，如果有token，请求中添加token
  if (getLocal()) {
    config.headers.token = getLocal('token')
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
  // }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
