// import {RECEIVED_NOTIFICATION, HIDE_NOTIFICATION, SET_PAGE_TITLE, SET_APP_BAR_TITLE, SET_GATEWAYS, SET_FILTER, UPDATE_SELECTED} from '../constants';
// import {createReducer} from '../utils/misc';

// const defaultPageTitle = 'Wallpaper';

const initialState = {
  pageTitle: 'Neon - Rich Media Solutions'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'APPLICATION_DISPATCH':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

// export default createReducer(initialState, {
//   [RECEIVED_NOTIFICATION]: (state, payload) => {
//     return {
//       ...state,
//       snackMessage: payload.message,
//       snackOpen: true
//     }
//   },
//   [HIDE_NOTIFICATION]: (state) => {
//     return {
//       ...state,
//       snackOpen: false,
//     }
//   },
//   [SET_PAGE_TITLE]: (state, payload) => {
//     return {
//       ...state,
//       pageTitle: `${defaultPageTitle} - ${payload.title}`
//     }
//   },
//   [SET_APP_BAR_TITLE]: (state, payload) => {
//     return {
//       ...state,
//       appBarTitle: payload.title
//     }
//   },
//   [SET_GATEWAYS]: (state, payload) => {
//     return {
//       ...state,
//       gateways: payload
//     }
//   },
//   [SET_FILTER]: (state, payload) => {
//     return {
//       ...state,
//       filter: {
//         ...state.filter, ...payload
//       }
//     }
//   },
//   [UPDATE_SELECTED]: (state, payload) => {
//     return {
//       ...state,
//       selectedFilter: {
//         ...state.selectedFilter,
//         [payload.type]: payload.value
//       }
//     }
//   }
// });
