import QueryString from 'qs'
import { request } from './_axios'

export const validateCodeAndGetAccess = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_SECRET_KEY
  const requestData = { grant_type: 'client_credentials' }
  const options = {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: QueryString.stringify(requestData),
    url: process.env.SPOTIFY_AUTH_URI,
  }
  const response = await request(options)

  const { data } = response
  return data
}
