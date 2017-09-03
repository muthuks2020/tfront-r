import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import auth from './auth'
import application from './application'
import {reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  form,
  application
})

export default rootReducer
