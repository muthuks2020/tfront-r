/* eslint new-cap: 0 */

import React from 'react'
import {Route} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

/* containers */
// import App from './containers/App'
import Login from './components/Login'
import Home from './components/Home'
import GenerateAds from './components/GenerateAds'
import Details from './components/Details'
// import TextEditor from './components/TextEditor'
import Register from './components/Register'
// import NotFound from './components/NotFound'

// import {DetermineAuth} from './components/DetermineAuth'
import AuthenticatedComponent from './components/AuthenticatedComponent'
import NotAuthenticatedComponent from './components/NotAuthenticatedComponent'

injectTapEventPlugin()

export default (
  <div className="app-routes">
    <Route path="/" component={AuthenticatedComponent}>
      <Route path="home" component={Home} />
      <Route path="generate_ads" component={GenerateAds} />
      <Route path="details" component={Details} />
    </Route>
    <Route path="/" component={NotAuthenticatedComponent}>
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Route>
    {/*
    <Route
      path='*'
      component={ DetermineAuth(NotFound) }
    />
    */}
  </div>
)
