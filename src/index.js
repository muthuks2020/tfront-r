import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Redirect, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/configureStore'
import routes from './routes'

import './styles/style.css'
import './styles/app.css'
import 'react-select/dist/react-select.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="/home" />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
