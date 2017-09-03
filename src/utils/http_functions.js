/* eslint camelcase: 0 */
import config from '../config'
import axios from 'axios'

const tokenConfig = token => ({
  headers: {
    Authorization: token // eslint-disable-line quote-props
  }
})

export function validate_token(token) {
  return axios.post(config.API_ENDPOINT + '/api/auth/check', {
    token
  })
}

export function get_github_access() {
  window.open(
    '/github-login',
    '_blank' // <- This is what makes it open in a new window.
  )
}

export function create_user(email, password, name) {
  return axios.post(config.API_ENDPOINT + '/api/auth/signup', {
    email,
    password,
    name
  })
}

export function get_token(email, password) {
  return axios.post(config.API_ENDPOINT + '/auth/login', {
    email,
    password
  })
}

export function has_github_token(token) {
  return axios.get(
    config.API_ENDPOINT + '/api/has_github_token',
    tokenConfig(token)
  )
}

export function data_about_user(token) {
  return axios.post(
    config.API_ENDPOINT + '/api/auth/check',
    {},
    {headers: {Authorization: 'Bearer ' + token}}
  )
}

export function get_fake_data_user() {
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}

export function get_fake_userdetail(id) {
  return axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
}

export function api_instance(url) {
  const token = localStorage.getItem('token')
  const instance = axios.create({
    baseURL: config.API_ENDPOINT,
    headers: {Authorization: 'Bearer ' + token}
  })

  instance.interceptors.response.use(
    function(response) {
      // Do something with response data
      return response.data
    },
    function(error) {
      console.log('interceptors error')
      // Do something with response error
      return Promise.reject(error)
    }
  )

  return instance
}

export function kontakt_api() {
  const instance = axios.create({
    headers: {
      Accept: 'application/vnd.com.kontakt+json;version=10',
      'Api-Key': config.kontakt_api_key,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  return instance
}
