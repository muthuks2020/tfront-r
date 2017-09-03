import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import * as actionCreators from '../../actions/auth'
import * as applicationCreators from '../../actions/application'
import {removeIpl} from '../../utils/misc'
import AuthService from '../Misc/AuthService'
import classnames from 'classnames'
import DocumentTitle from 'react-document-title'

@connect(
  state => state,
  dispatch =>
    bindActionCreators({...actionCreators, ...applicationCreators}, dispatch)
)
@AuthService
export default class AuthenticatedComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      viewProfile: false
    }

    this.routes = [
      {slug: 'home', title: 'Active Campaigns'},
      {slug: 'generate_ads', title: 'Generate Ad Tags'}
    ]
  }

  componentWillMount() {
    this.props.checkAuth().then(user => {
      if (user) {
        this.props.saveUser(user)
      } else {
        browserHistory.push('/login')
      }
      setTimeout(() => {
        removeIpl()
      }, 700)
    })
  }

  render() {
    return (
      <DocumentTitle title={this.props.application.pageTitle}>
        <div>
          {this.props.auth.currentUser &&
            <div>
              <header className="bottom-border clearfix">
                <div className="container-fluid">
                  <nav className="navbar navbar-default">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <button
                          type="button"
                          className="navbar-toggle"
                          data-toggle="collapse"
                          data-target="#myNavbar"
                        >
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                        <a
                          className="navbar-brand"
                          style={{float: 'none'}}
                          onClick={() => browserHistory.push('/')}
                        >
                          <div className="logo-header pull-left" />
                        </a>
                      </div>
                      <div className="collapse navbar-collapse" id="myNavbar">
                        <ul
                          className="nav navbar-nav navbar-right"
                          id="User-dropdown"
                          onClick={() => {
                            this.setState({
                              viewProfile: !this.state.viewProfile
                            })
                          }}
                        >
                          <li className="visible-xs text-center margin-top">
                            {' '}<span className="glyphicon glyphicon-user" />
                            <span className="prof-name">Name</span>
                          </li>
                          <li className="align-top hidden-xs">
                            <span className="glyphicon glyphicon-user" />
                            <span className="prof-name">Name</span>
                          </li>
                          <div
                            id="User-content"
                            style={{
                              display: this.state.viewProfile ? 'block' : 'none'
                            }}
                          >
                            <ul>
                              <li>View Profile</li>
                              <li>Settings</li>
                              <li>Billing</li>
                              <li onClick={() => {
                                this.props.logoutAndRedirect()
                              }}>Log out</li>
                            </ul>
                          </div>
                        </ul>
                        <ul className="nav navbar-nav navbar-left ">
                          {this.routes.map((ele, key) => {
                            return (
                              <li
                                className={classnames({
                                  active:
                                    '/' + ele.slug ==
                                    this.props.location.pathname
                                })}
                                key={key}
                              >
                                <a
                                  onClick={() => {
                                    browserHistory.push('/' + ele.slug)
                                  }}
                                >
                                  {ele.title}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
              <div>
                {this.props.children}
              </div>
            </div>}
        </div>
      </DocumentTitle>
    )
  }
}
