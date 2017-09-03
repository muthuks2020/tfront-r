import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../actions/auth'
import Promise from 'bluebird'
import {api_instance} from '../../utils/http_functions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default function AuthService(Component) {
  @connect(state => state, mapDispatchToProps)
  class AuthServiceComponent extends React.Component {
    constructor(props) {
      super(props)
      this.checkAuth = this.checkAuth.bind(this)
    }

    checkAuth() {
      const token = localStorage.getItem('token')
      return new Promise((resolve, reject) => {
        if (!this.props.auth.currentUser) {
          if (!token) {
            return resolve(false)
          }
          console.log(token)
          api_instance()
            .post(
              '/auth/get_authenticated_user',
              {},
              {
                headers: {Authorization: 'Bearer ' + token}
              }
            )
            .then(res => {
              const u = res.user
              if (u) {
                return resolve(u)
              }
              return resolve(false)
            })
            .catch(function(error) {
              return resolve(false)
            })
        } else {
          return resolve(this.props.auth.currentUser)
        }
      })
    }

    render() {
      return <Component {...this.props} checkAuth={this.checkAuth} />
    }
  }
  return AuthServiceComponent
}
