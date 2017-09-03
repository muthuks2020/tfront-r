/* eslint max-len: 0, no-param-reassign: 0 */

export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant
    return acc
  }, {})
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]

    return reducer ? reducer(state, action.payload) : state
  }
}

export function parseJSON(response) {
  return response.data
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function removeIpl() {
  const ele = document.getElementById('ipl-progress-indicator')
  if (ele) {
    ele.classList.add('available')
    setTimeout(function() {
      ele.outerHTML = ''
    }, 3000)
  }
}

export function fieldsRequired(values, fields) {
  const errors = {}
  fields.forEach(fields => {
    if (!values[fields]) {
      errors[fields] = 'This field is required'
    }
  })
  return errors
}

export function toQueryString(obj) {
  const parts = []
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
    }
  }
  return parts.join('&')
}

export function contains(a, obj) {
  let i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}

export function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
