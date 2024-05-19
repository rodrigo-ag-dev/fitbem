import axios from 'axios'

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASEURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000
})

api.defaults.timeout = 15000

api.interceptors.response.use(response => {
  return response;
}, (error) => {
  return Promise.reject(error);
})

api.interceptors.request.use(request => {
  if (!request.headers ||
    !request.headers.authorization ||
    api.defaults.headers.Authorization !== request.headers.authorization
  )
    request.headers.Authorization = `Bearer ${api.defaults.headers.Authorization}`
  return request;
}, (error) => {
  return Promise.reject(error);
})

export default api