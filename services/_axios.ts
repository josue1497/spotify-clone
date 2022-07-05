import axios from 'axios'
const baseUrl = process.env.SPOTIFY_API_URI

export const _get = (uri: string, options: any) => {
  return axios.get(`${baseUrl}${uri}`, options)
}

export const request = ({ method = 'GET', url = baseUrl, ...options }: any) => {
  return axios({ method, url, ...options })
}

export const _post = (uri: string, options: any) => {
  return axios.post(`${baseUrl}${uri}`, options)
}

export const _put = (uri: string, options: any) => {
  return axios.put(`${baseUrl}${uri}`, options)
}

export const _delete = (uri: string, options: any) => {
  return axios.delete(`${baseUrl}${uri}`, options)
}
