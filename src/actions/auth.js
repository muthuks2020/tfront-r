import {browserHistory} from 'react-router'
import {api_instance} from '../utils/http_functions'
import config from '../config'
import axios from 'axios'
export const saveUser = user => {
  return dispatch => {
    dispatch({
      type: 'AUTH_DISPATCH',
      payload: {
        currentUser: user
      }
    })
  }
}
export function logout() {
  localStorage.removeItem('token')
  return {
    type: 'AUTH_DISPATCH',
    payload: {
      isAuthenticating: false,
      token: null,
      currentUser: null,
      statusText: 'You have been successfully logged out.'
    }
  }
}
export function logoutAndRedirect() {
  return dispatch => {
    dispatch(logout())
    browserHistory.push('/login')
  }
}
export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTH_DISPATCH',
      payload: {
        isAuthenticating: true,
        statusText: null
      }
    })
    return api_instance()
      .post('/auth/login', {
        email,
        password
      })
      .then(response => {
        const token = response.token
        localStorage.setItem('token', token)
        dispatch({
          type: 'AUTH_DISPATCH',
          payload: {
            token,
            currentUser: response.user
          }
        })
        browserHistory.push('/')
      })
      .catch(error => {
        dispatch({
          type: 'AUTH_DISPATCH',
          payload: {
            statusText: 'Invalid email or password',
            isAuthenticating: false
          }
        })
      })
  }
}
export function registerUser(email, password, name) {
  return function(dispatch) {
    dispatch({
      type: 'AUTH_DISPATCH',
      payload: {
        isRegistering: true
      }
    })
    return axios
      .post(config.API_ENDPOINT + '/auth/signup', {
        email,
        password,
        name
      })
      .then(response => {
        const data = response.data
        localStorage.setItem('token', data.token)
        dispatch({
          type: 'AUTH_DISPATCH',
          payload: {
            currentUser: data.user,
            isRegistering: false
          }
        })
        browserHistory.push('/home')
      })
      .catch(error => {
        alert('register failed!')
      })
  }
}
