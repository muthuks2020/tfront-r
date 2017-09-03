const initialState = {
  token: null,
  currentUser: null,
  isAuthenticating: false,
  statusText: null,
  isRegistering: false,
  isRegistered: false,
  registerStatusText: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_DISPATCH':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

// export default createReducer(initialState, {
//   [LOGIN_USER_REQUEST]: (state) => {
//     return {
//       ...state,
//       isAuthenticating: true
//     // statusText: null
//     }
//   },
//   [LOGIN_USER_SUCCESS]: (state, payload) => {
//     return {
//       ...state,
//       isAuthenticating: false,
//       token: payload.token,
//       statusText: 'You have been successfully logged in.'
//     }
//   },
//   [LOGIN_USER_FAILURE]: (state, payload) => {
//     return {
//       ...state,
//       isAuthenticating: false,
//       token: null,
//       statusText: 'Invalid email or password'
//     }
//   },
//   [LOGOUT_USER]: (state) => {
//     return {
//       ...state,
//       isAuthenticated: false,
//       token: null,
//       currentUser: null,
//       statusText: 'You have been successfully logged out.'
//     }
//   },
//   [REGISTER_USER_SUCCESS]: (state, payload) => {
//     return {
//       ...state,
//       isAuthenticating: false,
//       isAuthenticated: true,
//       isRegistering: false,
//       token: payload.token,
//       userName: jwtDecode(payload.token).email,
//       registerStatusText: 'You have been successfully logged in.'
//     }
//   },
//   [REGISTER_USER_REQUEST]: (state) => {
//     return {
//       ...state,
//       isRegistering: true
//     }
//   },
//   [REGISTER_USER_FAILURE]: (state, payload) => {
//     return {
//       ...state,
//       isAuthenticated: false,
//       token: null,
//       userName: null,
//       registerStatusText: `Register Error: ${payload.status} ${payload.statusText}`
//     }
//   },
//   ['SAVE_USER']: (state, payload) => {
//     return {
//       ...state,
//       currentUser: payload
//     }
//   }
// })
