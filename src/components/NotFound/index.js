import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../actions/auth'
import './index.css'

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class NotFound extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <a
                  href="http://www.jquery2dotnet.com"
                  className="btn btn-primary btn-lg"
                >
                  <span className="glyphicon glyphicon-home" />
                  Take Me Home{' '}
                </a>
                <a
                  href="http://www.jquery2dotnet.com"
                  className="btn btn-default btn-lg"
                >
                  <span className="glyphicon glyphicon-envelope" /> Contact
                  Support{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
